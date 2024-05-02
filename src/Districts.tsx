import { useEffect, useState } from 'react';
import Map from './components/Map'

import './index.css'
import Footer from './components/Footer';
import { Dataset, DatasetList } from './datasets';
// import PickDataMenu from './components/PickDataMenu';
import 'bootswatch/dist/lux/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import AppNav from './components/AppNav';

const Home = () => {
  
  const [dataset,] = useState<Dataset>(DatasetList[0]);
  const [districtId, setDistrictId] = useState("")
  const [districtContent, setDistrictContent] = useState(undefined)

  const officers = [
    {
        "District No": 1,
        "District Name": "Srikakulam",
        "Name": "Sri. Shrikesh B Lathkar",
        "Designation": "District Election Officer",
        "Mobile No": 9849903786,
        "E-mail": "collector_sklm@ap.gov.in",
        "district_id": "srikakulam"
    },
    {
        "District No": 2,
        "District Name": "Vizianagaram",
        "Name": "Ms NAGALAKSHMI S IAS",
        "Designation": "District Election Officer",
        "Mobile No": 9490194666,
        "E-mail": "collector_vznm@ap.gov.in",
        "district_id": "vizianagaram"
    },
    {
        "District No": 3,
        "District Name": "Parvathipuram Manyam",
        "Name": "Nishant Kumar.I.A.S.",
        "Designation": "District Election Officer",
        "Mobile No": 8688081801,
        "E-mail": "collector-pmanyam@ap.gov.in",
        "district_id": "parvathipuram_manyam"
    },
    {
        "District No": 4,
        "District Name": "Alluri Sitharama Raju",
        "Name": "Sri Sumit Kumar IAS",
        "Designation": "District Election Officer",
        "Mobile No": 9966116212,
        "E-mail": "collector-alluri@ap.gov.in",
        "district_id": "alluri_sitharama_raju"
    },
    {
        "District No": 5,
        "District Name": "Visakhapatnam",
        "Name": "MALLIKARJUNA",
        "Designation": "District Election Officer",
        "Mobile No": 8331093001,
        "E-mail": "collector_vspm@ap.gov.in",
        "district_id": "visakhapatnam"
    },
    {
        "District No": 6,
        "District Name": "Anakapalli",
        "Name": "PATTANSHETTI RAVI SUBHASH",
        "Designation": "District Election Officer",
        "Mobile No": 7396696684,
        "E-mail": "collector-ankp@ap.gov.in",
        "district_id": "anakapalli"
    },
    {
        "District No": 7,
        "District Name": "Kakinada",
        "Name": "Kritika Shukla IAS",
        "Designation": "District Election Officer",
        "Mobile No": 7993332244,
        "E-mail": "collector-kkd@ap.gov.in",
        "district_id": "kakinada"
    },
    {
        "District No": 8,
        "District Name": "Dr. B.R. Ambedkar Konaseema",
        "Name": "SRI HIMANSHU SHUKLA I.A.S",
        "Designation": "District Election Officer",
        "Mobile No": 8977935211,
        "E-mail": "collector-ksm@ap.gov.in",
        "district_id": "dr_b_r_ambedkar_konaseema"
    },
    {
        "District No": 9,
        "District Name": "East Godavari",
        "Name": "Dr.K.Madhavi Latha IAS.",
        "Designation": "District Election Officer",
        "Mobile No": 8977935601,
        "E-mail": "collector_egd@ap.gov.in",
        "district_id": "east_godavari"
    },
    {
        "District No": 10,
        "District Name": "West Godavari",
        "Name": "P. Prasanthi I A S",
        "Designation": "District Election Officer",
        "Mobile No": 8877897789,
        "E-mail": "collector_wgd@ap.gov.in",
        "district_id": "west_godavari"
    },
    {
        "District No": 11,
        "District Name": "Eluru",
        "Name": "V. Prasanna Venkatesh",
        "Designation": "District Election Officer",
        "Mobile No": 9491041488,
        "E-mail": "collector-eluru@ap.gov.in",
        "district_id": "eluru"
    },
    {
        "District No": 12,
        "District Name": "Krishna",
        "Name": "Sri P Raja Babu",
        "Designation": "District Election Officer",
        "Mobile No": 9849903968,
        "E-mail": "collector_krsn@ap.gov.in",
        "district_id": "krishna"
    },
    {
        "District No": 13,
        "District Name": "NTR",
        "Name": "Sri. S.Dilli Rao. I.A.S.",
        "Designation": "District Election Officer",
        "Mobile No": 9849903959,
        "E-mail": "collector.ntr@gmail.com",
        "district_id": "ntr"
    },
    {
        "District No": 14,
        "District Name": "Guntur",
        "Name": "Sri M. Venu Gopal Reddy I.A.S.",
        "Designation": "District Election Officer",
        "Mobile No": 9849904002,
        "E-mail": "collector_gntr@ap.gov.in",
        "district_id": "guntur"
    },
    {
        "District No": 15,
        "District Name": "Bapatla",
        "Name": "Sri P Ranjit Basha I.A.S",
        "Designation": "District Election Officer",
        "Mobile No": 9492907147,
        "E-mail": "collectorbapatla@gmail.com",
        "district_id": "bapatla"
    },
    {
        "District No": 16,
        "District Name": "Palnadu",
        "Name": "SIVA SANKAR LOTHETI IAS",
        "Designation": "District Election Officer",
        "Mobile No": 9154959301,
        "E-mail": "collector-palnadu@ap.gov.in",
        "district_id": "palnadu"
    },
    {
        "District No": 17,
        "District Name": "Prakasam",
        "Name": "Dinesh Kumar A.S",
        "Designation": "District Election Officer",
        "Mobile No": 8886616019,
        "E-mail": "collector_pkm@ap.gov.in",
        "district_id": "prakasam"
    },
    {
        "District No": 18,
        "District Name": "Sri Potti Sriramulu Nellore",
        "Name": "Hari Narayanan M",
        "Designation": "District Election Officer",
        "Mobile No": 9849904051,
        "E-mail": "collector_nlr@ap.gov.in",
        "district_id": "sri_potti_sriramulu_nellore"
    },
    {
        "District No": 19,
        "District Name": "Kurnool",
        "Name": "Dr G Srijana IAS",
        "Designation": "District Election Officer",
        "Mobile No": 9491017555,
        "E-mail": "kurnoolcollector@gmail.com",
        "district_id": "kurnool"
    },
    {
        "District No": 20,
        "District Name": "Nandyal",
        "Name": "Sri Dr. Manazir Jeelani Samoon I.A.S",
        "Designation": "District Election Officer",
        "Mobile No": 9642103123,
        "E-mail": "collector-nandyal@ap.gov.in",
        "district_id": "nandyal"
    },
    {
        "District No": 21,
        "District Name": "Ananthapuramu",
        "Name": "M Gowthami",
        "Designation": "District Election Officer",
        "Mobile No": 9492744442,
        "E-mail": "Collector_antp@ap.gov.in",
        "district_id": "ananthapuramu"
    },
    {
        "District No": 22,
        "District Name": "Sri Sathya Sai",
        "Name": "P Arun Babu",
        "Designation": "District Election Officer",
        "Mobile No": 9032816888,
        "E-mail": "collector-sssai@ap.gov.in",
        "district_id": "sri_sathya_sai"
    },
    {
        "District No": 23,
        "District Name": "YSR Kadapa",
        "Name": "Vijay Rama Raju V",
        "Designation": "District Election Officer",
        "Mobile No": 9849904109,
        "E-mail": "Collector_kdp@ap.gov.in",
        "district_id": "ysr_kadapa"
    },
    {
        "District No": 24,
        "District Name": "Annamayya",
        "Name": "P.S.Girisha",
        "Designation": "District Election Officer",
        "Mobile No": 8977942404,
        "E-mail": "collector-annamayya@ap.gov.in",
        "district_id": "annamayya"
    },
    {
        "District No": 25,
        "District Name": "Chittoor",
        "Name": "Shan Mohan Sagili I.A.S",
        "Designation": "District Election Officer",
        "Mobile No": 9491077001,
        "E-mail": "collectorchittoor@gmail.com",
        "district_id": "chittoor"
    },
    {
        "District No": 26,
        "District Name": "Tirupati",
        "Name": "K Venkata Ramana ReddyIAS",
        "Designation": "District Election Officer",
        "Mobile No": 6281155946,
        "E-mail": "collector-tirupati@ap.gov.in",
        "district_id": "tirupati"
    }
]
    


  useEffect(()=>{

      // console.log(officers)

  }, [])
  

  const RightContainer = (d:any)=>{



    let content = <div className="table-responsive-sm">

        {/*<div>
          {districtId}
        </div>*/}

        <div>
          CEO Office
        </div>

        <Table striped bordered size="sm">
      <thead>
        <tr>
          
          <th>Designation</th>
          <th>Name</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>Chief Electoral Officer</td>
          <td>Sri Mukesh Kumar Meena</td>
          <td>ceo_andhrapradesh@eci.gov.in 08632445360</td>
        </tr>
        <tr>
          
          <td>Addl CEO</td>
          <td>Sri Harindra Prasad</td>
          <td>Peshi +919059450530</td>
        </tr>
        <tr>
          
          <td>Addl CEO</td>
          <td>Sri Koteswararao</td>
          <td>Peshi +917075491431</td>

        </tr>

        <tr>
          
          <td>Joint CEO</td>
          <td>Sri Venkateswararao</td>
          <td>ceo_andhrapradesh@eci.gov.in</td>
          
        </tr>
      </tbody>
    </Table>


    </div>

    if(d.d) {
      content = undefined
    }

    return <div> {content}
      
    </div>
  }

  

  const mapClick = (districtId: string) =>{
    setDistrictId(districtId);

    console.log(districtId)
    let o  = officers.find((i)=>i['district_id'].toLowerCase()==districtId.toLowerCase());
    setDistrictContent(o)
    if(districtId=="") {
      setDistrictContent(undefined);
    }
  }


  const Deo = (d: any) =>{
    
    let content

    if(d && d.d) {

    content =  <Table striped bordered size="sm">

      <thead>
      <h6>Election officers</h6>
        <tr>
          
          <td>Name</td>
          <td>Designation</td>
          <td>Mobile</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{d.d["Name"]}</td>
        <td>{d.d["Designation"]}</td>
        <td>{d.d["Mobile No"]}</td>
        <td>{d.d["E-mail"]}</td>
      </tr>
    </tbody>

    </Table>

    }
    return  <>{content}</>
  }
  

  return (


    <div className='App'>

    <Container fluid>
      <Row>
        <div  className='side-nav-div'>
          <AppNav />
        </div>
        <div className='side-cont-div'>
          <Container>
            <Row>
              <Col xs="12">
              <h2 className="header-margin">Andhra Pradesh</h2>
              </Col>
              <Col>
              
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12">
              <Map link={dataset.link} map={dataset.map} mapClick={mapClick} propName={"dist"}/>
              </Col>
              <Col lg="6" md="12">
              <RightContainer d={districtContent}/>
              <h3>{districtId}</h3>
              <Deo d={districtContent} />
              </Col>
            </Row>
            <Row>
              <Col>
              <Footer />
              </Col>
            </Row>
          </Container>
        </div>
      </Row>
    </Container>
    </div>
  )
}

export default Home
