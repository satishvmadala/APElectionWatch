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
import generalObserversData from './components/datasets/General_Observers_2024.json';
import expendituresObserversData from './components/datasets/Expenditure_Observers.json';
import policeObserversData from './components/datasets/Police_Observers_2024.json';

//import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
//import { FaSearch } from "react-icons/fa";
import Filter from './Filter';

const DefaultObservers = ({constituencyId, clsName})=> {


  return <div className={clsName}> <div className={constituencyId.length >0 ? 'd-none': 'd-block'}>
  
  <div className="mt-4">
  <h6>State Election Observers</h6>
  </div>
  <Table striped bordered size="sm">
    <thead>
      <tr>
      <th>Role</th>
        <th>Name</th>
        <th>Position</th>
        <th>Contact</th>
      </tr>
    </thead>
    <tbody>

    <tr>
<td>Observer General</td>
<td>Sri Ram Mohan Mishra</td>
<td>IAS Rtd</td>
<td></td>
</tr>

<tr><td>Liason Officer for Observer General</td>
<td>Sri Raju</td><td>Forest Settlement Officer</td>
<td>+919398567858</td></tr>

<tr><td>Observer General Police</td>
<td>Sri Rajiv Mishra</td><td>IPS Retd</td>
<td></td></tr>

<tr><td>Liason for Observer General Police</td>
<td>Sri Ravi Kumar</td><td>Addl SP</td>
<td>+919154966496</td></tr>
      
      </tbody>
  </Table>
  </div>
  </div>
}

const DefaultElectionWatchMember = ()=> {


    return  <>
    
    <div className="mt-4">
    <h6>Election Watch Functionaries</h6>
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



const DefaultMembersContainer = ({constituencyId}) =>{
    
    
  return <div className={constituencyId?.length >0 ? 'd-none': 'd-block' }><div className="table-responsive-sm">

        <h4>
          AP - CEO Office
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
    </div>



}


const Assembly = () => {
  
  const [dataset] = useState<Dataset>(DatasetList2[0]);
  
  const [constituencyId, setconstituencyId] = useState("")   
  const [districtId, setDistrictId] = useState("")
  
  const [constituencyDSPData, setConstituencyDSPData] = useState([])
  const [constituencyROData, setConstituencyEROData] = useState([])
  const [watchMemberData, setWatchMemberData] = useState([])
  const [constituencyDEOData,setConstituencyDEOData] = useState([])
  const [constituencySPData,setConstituencySPData] = useState([])
  const [constituencyGOData,setConstituencyGOData] = useState([])
  const [constituencyExData,setConstituencyExData] = useState([])
  const [constituencyPOData,setConstituencyPOData] = useState([])

  useEffect(() => {
    setConstituencyDSPData(cData);
    setConstituencyEROData(eData)
    setWatchMemberData(wData)
    setConstituencyDEOData(dData)
    setConstituencySPData(sData)
    setConstituencyGOData(generalObserversData)
    setConstituencyExData(expendituresObserversData)
    setConstituencyPOData(policeObserversData)
  }, []); 


  const MapBottomContainer = ({clsName})=>{

    const constituency = constituencyDSPData.find((i)=>i.constituency_id.toLowerCase() == constituencyId.toLowerCase())
    const defaultro = constituencyROData.find((i)=>i.constituency_id.toLowerCase() == constituencyId.toLowerCase())
    
   

    const roContent = <Table striped bordered size="sm">
    <thead>
    
      <tr>
        <th>RO Name</th>
        <th>Contact</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{defaultro?.ero_name}</td>
        <td>{defaultro?.mobile_no}</td>       
      </tr>
    </tbody>
  </Table>

    let dspContent = <div>    

    <Table striped bordered size="sm">
  <thead>
  
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



    return <div className={clsName}> 


    {constituencyId && 
    
            <>
            
          <div >
           
           <div>{roContent}</div>
           <div>{dspContent}</div>
          </div>
            </>
    }
    </div>
  }

  
  const RightContainer = ()=>{

    const districtWatchMember = watchMemberData.find((i)=>i.district_id.toLowerCase() == districtId.toLowerCase())
    const defaultDeo = constituencyDEOData.find((i)=>i.district_id.toLowerCase() == districtId.toLowerCase())
    const defaultSp = constituencySPData.find((i)=>i.district_id.toLowerCase() == districtId.toLowerCase())
    const defaultGo = constituencyGOData.find((i)=>i.district_id.toLowerCase() == districtId.toLowerCase())
    
    const defaultExpObserver = constituencyExData.find((i)=>i.district_id.toLowerCase() == districtId.toLowerCase())
    const defaultPoliceObserver = constituencyPOData.find((i)=>i.district_id.toLowerCase() == districtId.toLowerCase())


    let GoMember = <div className="table-responsive-sm">

        <h5>
          Observers
        </h5>
    
        <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>Role</th>
          <th>Name</th>
          <th>Position</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>General Observer</td>
          <td>{defaultGo?.observer_name}</td>
          <td>{defaultGo?.service}</td>
          <td>{defaultGo?.Personal_Number}</td>
        </tr>
        <tr>
        <td>Police Observer</td>
          <td>{defaultPoliceObserver?.observer_name}</td>
          <td>{defaultPoliceObserver?.service}</td>
          <td>{defaultPoliceObserver?.personal_number}</td>
        </tr>
        <tr>
        <td>Expenditure Observer</td>
          <td>{defaultExpObserver?.name}</td>
          <td>{defaultExpObserver?.service}</td>
          <td>{defaultExpObserver?.phone_no}</td>
        </tr>
      </tbody>
    </Table>
    </div>
    


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
          Election Watch Functionary
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

  
    

   



    return <div> 

    {constituencyId && 
    
            <>
            <h3>
          {constituencyId}
          </h3>
          <div>
           <div className="mt-4">{DeoMember}</div>
           <div className="mt-4">{SPMember}</div>
           <div className="mt-4">{GoMember}</div>
           <div className="mt-4">{watchMember}</div>
           
          </div>
            </>
    }
    </div>
  }



  const mapClick = (constituencyId: string, districtId: string) =>{

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
          <Filter />
            <Row>
              <Col>
              <h2 className="header-margin">AP Assembly Constituencies</h2>
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12">
              <AssemblyMap link={dataset.link} map={dataset.map} mapClick={mapClick} propName={"assembly"}/>
              <DefaultObservers constituencyId={constituencyId} clsName={'d-none d-lg-block'}/>
              <MapBottomContainer clsName={'d-none d-lg-block'}/>
              </Col>
              <Col lg="6" md="12" className="table-responsive-sm">
                <DefaultMembersContainer constituencyId={constituencyId}/>
              <RightContainer />
              </Col>
            </Row>
            <Row>
            <Col lg="6" md="12">
            <DefaultObservers constituencyId={constituencyId} clsName={' d-lg-none'}/>
              <MapBottomContainer clsName={' d-lg-none'}/>
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
