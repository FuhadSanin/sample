import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React,{useState} from 'react';
import './navbar.css'

function Navbar_Design() {
  const [navbar,setNavbar]=useState(false);
  const changeBg=()=>{
    if(window.scrollY>2100)
      setNavbar(true);
    else
      setNavbar(false);
  }
  window.addEventListener('scroll',changeBg)

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className={navbar ? "navbar active" : "navbar"} style={{position:"fixed",width:"100%",zIndex:"1"}}>
          <Container fluid>
            <Navbar.Brand style={{color:"yellow"}} className="text-primary" href="#">Fuhad Sanin</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title className='text-primary' id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Fuhad Sanin
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='responsive'>
                <Nav>
                  <Nav.Link  href="#banner" className={navbar ? "nav-data curr" : "nav-data"}>Home</Nav.Link>
                  <Nav.Link className={navbar ? "nav-data curr" : "nav-data"} href="#about">About</Nav.Link>
                  <Nav.Link className={navbar ? "nav-data curr" : "nav-data"} href="#skills">Skills</Nav.Link>
                  <Nav.Link className={navbar ? "nav-data curr" : "nav-data"} href="#portfolio">Portfolio</Nav.Link>
                  <Nav.Link className={navbar ? "nav-data curr" : "nav-data"} href="#">Blogs</Nav.Link>
                  <Nav.Link className={navbar ? "nav-data curr" : "nav-data"} href="#contact">Contact</Nav.Link>


                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbar_Design;