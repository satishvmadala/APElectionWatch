import { useState, useEffect } from 'react';
import AssemblyMap from './components/AssemblyMap'
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

import cData from './components/datasets/DSPs_in_Constituencies.json'; 
import eData from './components/datasets/AP_EROS.json'; 
import wData from './components/datasets/AP_Election_Watch_Members.json';
import dData from './components/datasets/DEO_2024_Corrected.json';
import sData from './components/datasets/AndhraPradesh_District_SPs.json';

const DefaultElectionWatchMember = ()=> {


    return  <>
    
    <div className="mt-4">
    <h6>Election Watch Members</h6>
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
          <td>
          Former Chief Secretary and
Vice President of
CFD
          </td>
          <td>LV Subrahmanyam IAS Retd</td>
          <td>lankavs1960@gmail.com</td>
        </tr>
        <tr>
          <td>
          <div>Former Spl CS to Governor</div>
          <div>Former State Election Commissioner</div>
          </td>
          <td>Dr N Rameshkumar IAS Retd </td>
          <td>rameshkumarnimmagadda@gmail.com</td>
        </tr>
        </tbody>
    </Table>
    </>

}


const Assembly = () => {
  
  const [dataset] = useState<Dataset>(DatasetList2[0]);
  
  const [constituencyId, setconstituencyId] = useState("")   
  const [districtId, setDistrictId] = useState("")
  
  const [constituencyDSPData, setConstituencyDSPData] = useState([])
  const [constituencyEROData, setConstituencyEROData] = useState([])
  const [watchMemberData, setWatchMemberData] = useState([])
  const [constituencyDEOData,setConstituencyDEOData] = useState([])
  const [constituencySPData,setConstituencySPData] = useState([])

  useEffect(() => {
    setConstituencyDSPData(cData);
    setConstituencyEROData(eData)
    setWatchMemberData(wData)
    setConstituencyDEOData(dData)
    setConstituencySPData(sData)
  }, []); 
  






  const RightContainer = ()=>{

    const constituency = constituencyDSPData.find((i)=>i.constituency_id.toLowerCase() == constituencyId.toLowerCase())
    const defaultEro = constituencyEROData.find((i)=>i.constituency_id.toLowerCase() == constituencyId.toLowerCase())
    const districtWatchMember = watchMemberData.find((i)=>i.district_id.toLowerCase() == districtId.toLowerCase())
    const defaultDeo = constituencyDEOData.find((i)=>i.district_id.toLowerCase() == districtId.toLowerCase())
    const defaultSp = constituencySPData.find((i)=>i.district_id.toLowerCase() == districtId.toLowerCase())
    
    console.log('distr', districtWatchMember)


    let DeoMember
    if(defaultDeo){
        DeoMember = <div className="table-responsive-sm">

        <h5>
          District Election Officer
        </h5>
    
        <Table striped bordered size="sm">
      <thead>
        <tr>
        <th>Name</th>
          <th>Position</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{defaultDeo.Name}</td>
          <td>{defaultDeo.Designation}</td>
          <td>{defaultDeo.Mobile_No}</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    }

    let SPMember
    if(defaultSp){
        SPMember = <div className="table-responsive-sm">

        <h5>
          Superintendent of Police
        </h5>
    
        <Table striped bordered size="sm">
      <thead>
        <tr>
        <th>Name</th>
          <th>Email-ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{defaultSp.name_of_the_sp}</td>
          <td>{defaultSp.email_id}</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    }

    let watchMember
    if(districtWatchMember){
        watchMember = <div className="table-responsive-sm">

        <h5>
          District Watch Member
        </h5>
    
        <Table striped bordered size="sm">
      <thead>
        <tr>
        <th>Name</th>
          <th>Designation</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{districtWatchMember.Name}</td>
          <td>{districtWatchMember.Position}</td>
          <td>{districtWatchMember.Email}</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    }

    let  ceoOffice
    
    if(constituencyId == "") {
            ceoOffice  = <div className="table-responsive-sm">

            <h4>
              CEO Office
            </h4>
        
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

        <DefaultElectionWatchMember />
        </div>
    }
    

    const eroContent = <Table striped bordered size="sm">
    <thead>
    <h6></h6>
      <tr>
        <th>ERO Name</th>
        <th>Contact</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{defaultEro?.ero_name}</td>
        <td>{defaultEro?.mobile_no}</td>       
      </tr>
    </tbody>
  </Table>

    let dspContent = <div>    

    <Table striped bordered size="sm">
  <thead>
  <h6></h6>
    <tr>
      
      <th>DSP Name</th>
      
      <th>Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ramesh</td>
      <td>94409 06871</td>
    </tr>
  </tbody>
</Table>




</div>








    if(constituency) {
        dspContent = <div>
        <Table striped bordered size="sm">
      <thead>
      <h6></h6>
        <tr>
          
          <th>DSP Name</th>
          
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>{constituency.dsp_name}</td>
          <td>{constituency.mobile_no}</td>
          
        </tr>
        
      </tbody>
    </Table>

    </div>
    }



    return <div> 

    {ceoOffice}
    {constituencyId && 
    
            <>
            <h3>
          {constituencyId}
          </h3>

           <div> {eroContent}</div>
           <div> {dspContent}</div>
           <div>{watchMember}</div>
           <div>{DeoMember}</div>
           <div>{SPMember}</div>
            </>
            
        
    }
      
    </div>
  }



  const mapClick = (constituencyId: string, districtId: string) =>{

    console.log('map cli', constituencyId, districtId)
    setconstituencyId(constituencyId);
    setDistrictId(districtId);
    
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
              <Col>
              <h2 className="header-margin">Assembly Constituencies</h2>
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12">
              <AssemblyMap link={dataset.link} map={dataset.map} mapClick={mapClick} propName={"assembly"}/>
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

export default Assembly;
