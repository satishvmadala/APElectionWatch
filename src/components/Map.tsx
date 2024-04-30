import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Data, CantonCode, ParsedData, ParserOutput } from '../types';

interface MapProps {
  link: string;
  map: string;
  mapClick: Function, 
  propName: string,
}

const Map: React.FC<MapProps> = ({ link, map, mapClick, propName }) => {
  const svgRef = useRef(null);
  const legendRef = useRef(null);

  /* ### Scaling ### */
  const secondScale = .41;
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [svgWidth, setSvgWidth] = useState(viewportWidth * secondScale);
  const [svgHeight, setSvgHeight] = useState((viewportWidth * secondScale * 2) / 3);
  const scaleFactor = 4.5;
  const [scale, updateScale] = useState(svgWidth * scaleFactor);

  /* ### Data storage ### */
  const [cantons, setCantons] = useState<CantonCode[]>([]);
  const [topography, setTopography] = useState<any>([]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`);
    svg.style('background-color', '#FEFFFE');

    const legendSvg = d3.select(legendRef.current);


    /* ### Actual map code ### */
    const projection = d3.geoMercator()
      .scale(scale)
      .center([80.6480, 16.5062])
      .translate([svgWidth / 2, svgHeight / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    // const color = d3.scaleSequential(d3.interpolateBlues);
    // const color = d3.scaleSequential(["orange", "green", "pink","blue"]);
    const color = d3.scaleSequential(d3.interpolate("orange", "green"));


    const tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("display", "none");

    const drawD3Map = (topo: any, parsed: ParserOutput) => {
      const { smallest, biggest } = parsed;
      svg.append('g')
        .selectAll('path')
        .data(topo.features)
        .enter()
        .append('path')
        .attr('class', 'canton')
        // @ts-ignore
        .attr('d', pathGenerator)
        .style('fill', (d: any) => {
          let id = propName === "dist" ? d.properties.district_id : d.properties.ac_name;
          id = id.toString();
          if (id.length === 1) { id = '0' + id; }
          // let cantonData: ParsedData = data.filter((item) => item.id === id)[0];
          // let cantonValue = cantonData.value;
          // let colorValue = (cantonValue - smallest) / (biggest - smallest);
          // let cantonData = id;
          
          let maxm = 2355665;
          let minm = 35344;
          let randomnumber = Math.floor(Math.random() * (maxm-minm+1)+minm);
          let cantonValue = randomnumber;
          let colorValue = (cantonValue - smallest) / (biggest - smallest);
          return color(colorValue) as string;
          

        })
        .style('stroke', 'black')
        .style('stroke-width', .2)
        // .on("click", ( event: any,d: any)=>{
        //   let id = d.properties.NEW_DIST;
        //   id = id.toString();
        //   mapClick(id)
        // })
        .on("mouseover", (event: any, d: any) => {
          
          let id = d.properties.district_id;
          id = id.toString();
          mapClick(id)
          tooltip.transition()
            .duration(200)
            .style("display", "block");
          tooltip.html(() => {
            
            if (id.length === 1) { id = '0' + id; }
            // let cantonData: ParsedData = data.filter((item) => item.id === id)[0];
            // let cantonData = id;
            // return `${cantonData.name}: ${cantonData.value}`;
            return id;
          })
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 40}px`);
        })
        .on("mouseout", () => {
          mapClick("")
          tooltip.transition()
            .duration(500)
            .style("display", "none");
        });;

      /* ### End of actual map code ### */

      /* ### Legend ### */

      const legend = legendSvg.append("g")
        .attr("class", "legend")
        .attr("transform", `translate(30, 20)`);

      const rectWidth = 30;
      const numColors = 10;
      for (let i = 0; i < numColors; i++) {
        legend.append("rect")
          .attr("x", i * rectWidth)
          .attr("y", 0)
          .attr("width", rectWidth)
          .attr("height", rectWidth)
          .style("stroke", "black")
          .style("stroke-width", .2)
          .style("fill", color(i / numColors) as string);
      }

      // Add text labels to the legend
      legend.append("text")
        .attr("x", -10)
        .attr("y", -5)
        .text(smallest);

      legend.append("text")
        .attr("x", numColors * rectWidth - 35)
        .attr("y", -5)
        .text(biggest);
      /* ### End of legend ### */
    };


    // ### Fetching data ###
    async function waitForPromisesAndRunD3() {
      try {
        // Define helper variables
        let response, response2, response3, jsonCantons: CantonCode[], jsonData: Data, localTopography: any;

        // Fetch canton data
        if (cantons != null && cantons.length > 0 && cantons != undefined) {
          jsonCantons = cantons;
        } else {
          response = await fetch('https://raw.githubusercontent.com/wojwozniak/maps/main/public/cantons.json');
          jsonCantons = await response.json();
          setCantons(jsonCantons);
        }

        // Fetch data
        response2 = await fetch(link);
        if (response2 === undefined) {
          response2 = new Response();
        }
        jsonData = await response2.json();

        // Parse data
        const parseData = (data: Data, cantons: CantonCode[]) => {
          let smallest = Number.MAX_SAFE_INTEGER;
          let biggest = Number.MIN_SAFE_INTEGER;
          const newCantons: ParsedData[] = cantons.map((canton: CantonCode) => {
            let cantonCode = canton.code;
            const cantonData = data.data.filter((item) => item.code === cantonCode);
            let cantonValue = cantonData[0].value;
            cantonValue = parseInt(cantonValue);
            if (cantonValue < smallest) { smallest = cantonValue; }
            if (cantonValue > biggest) { biggest = cantonValue; }
            return {
              id: canton.id,
              name: canton.name,
              code: cantonCode,
              value: cantonValue
            }
          });
          let output: ParserOutput = { data: newCantons, smallest, biggest };
          return output;
        };

        // Fetch topography data
        if (topography != null && topography.length > 0 && topography != undefined) {
          localTopography = topography;
        } else {
          response3 = await fetch(map);
          localTopography = await response3.json();
          setTopography(localTopography);
        }

        // Run d3 renderer
        try {
          drawD3Map(localTopography, parseData(jsonData, jsonCantons));
        } catch (error) {
          console.error('Error while running d3:', error);
        }
      } catch (error) {
        console.error('Error while waiting for promises:', error);
      }
    }
    waitForPromisesAndRunD3();
    // ### End of fetching data ###


    // ### Resize ###
    function handleResize() {
      const newViewportWidth = window.innerWidth;
      setViewportWidth(newViewportWidth);
      setSvgWidth(newViewportWidth * 0.8);
      const newSvgHeight = (newViewportWidth * 0.8 * 8) / 13;
      setSvgHeight(newSvgHeight);
      updateScale(newSvgHeight * scaleFactor);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // ### End of Resize ###

  }, []);



  return (
    <>
      <svg ref={svgRef} className='svg' preserveAspectRatio='xMidYMid' />
      {/*<svg ref={legendRef} className='legend__svg' preserveAspectRatio='xMidYMid' />*/}
    </>
  );
}

export default Map;