

import './index.css'
import Footer from './components/Footer';
import {useEffect} from 'react'
// import PickDataMenu from './components/PickDataMenu';
import 'bootswatch/dist/lux/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import AppNav from './components/AppNav';

export default function CC () {

  useEffect(() => {
    // Adjust the height of the iframe when the content has loaded
    const iframe = document.getElementById('google-form-iframe');
    if (iframe) {
      console.log(iframe.contentWindow.document.body.scrollHeight)
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
  }, []);

  return <div className='App'>

<Container fluid>
  <Row>
    <div  className='side-nav-div'>
      <AppNav />
    </div>
    <div className='side-cont-div'>
      <Container>
      
        
        <Row>
        
          <Col>

        <iframe 
         id="google-form-iframe"
        src="https://docs.google.com/forms/d/e/1FAIpQLScqEQO-JeNxE54lYRJ-ySR4ukDsVuc0m0EqKuaEG9MSzz-l6A/viewform?embedded=true" 
        width="100%" 
        height="1200" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">
          Loading...
      </iframe>  
          
          </Col>
        
          
        </Row>
        
      </Container>
    </div>
  </Row>
  <Footer />
</Container>
</div>


}
