import { useState, useEffect } from 'react';
import Map from './components/Map'
import AppNav from './components/AppNav.jsx'
import './index.css'
import Footer from './components/Footer';
import { Dataset, DatasetList2 } from './datasets';
// import PickDataMenu from './components/PickDataMenu';
import 'bootswatch/dist/lux/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';



const Assembly = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [dataset, setDataset] = useState<Dataset>(DatasetList2[0]);
  const [districtId, setDistrictId] = useState("")
  const updateDataset = (dataset: Dataset) => {
    setDataset(dataset);
    setOpenPopup(false);
  }

  const RightContainer = ()=>{


    let content = <div>

        <div>
          {districtId}
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
          
          <td>Chief Election Commissioner</td>
          <td>Shri Rajiv Kumar</td>
          <td>cec@eci.gov.in</td>
        </tr>
        <tr>
          
          <td>Election Commissioner</td>
          <td>Shri Gyanesh Kumar</td>
          <td>ecgk@eci.gov.in</td>
        </tr>
        <tr>
          
          <td>Election Commissioner</td>
          <td>Dr. Sukhbir Singh Sandhu</td>
          <td>ecsss@eci.gov.in</td>
        </tr>
      </tbody>
    </Table>


    </div>

    return <div> {content}
      
    </div>
  }

  const toggleMenu = () => {
    setOpenPopup(!openPopup);
  }

  const mapClick = (districtId: string) =>{
    setDistrictId(districtId);
  }

  useEffect(() => {
    setLabel(dataset.label);
  }, [dataset]);

  const [label, setLabel] = useState(dataset.label);

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
              <Col>
              <h2 className="header-margin">Assembly Constituencies</h2>
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12">
              <Map link={dataset.link} map={dataset.map} mapClick={mapClick} propName={"assembly"}/>
              </Col>
              <Col lg="6" md="12" className="table-responsive-sm">
              <RightContainer />
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

export default Assembly
