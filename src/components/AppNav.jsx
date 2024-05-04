// import { AiOutlineMenu } from 'react-icons/ai';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from 'react-router-dom';
import { FaBeer } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export default function N () {

  return <>
      
      <Navbar expand="lg" className="bg-body-tertiary side-nav">
      <Container className="side-nav-text">
        <Navbar.Brand href="/" className="brand-name">
        <span className="brand-word clr-green">Ap Election</span> <span className="breakpoint"> <br/> </span> <span className="brand-word clr-yellow">Watch</span>  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto side-nav-sub">
            <Nav.Link href="/"><FaHome /> Home </Nav.Link>
            <li className="nav-item">
            <Link to="/eci" className="nav-link"><FaBeer /> Eci</Link>
            </li>
            

            <li className="nav-item">
            <Link to="/districts" className="nav-link"><FaBlog /> Districts</Link>
        </li>
            
            <Nav.Link href="/"><FaPhone /> Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}
