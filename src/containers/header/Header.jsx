import React from 'react'
import ButtonLarge from '../../components/button/ButtonLarge';
import Conference from '../../components/conference/Conference';
import { Navbar, Nav, Container,} from 'react-bootstrap';
import '../../styles/custom.scss';
// import {Link} from 'react-router-dom';

const Header = (props) => {
   
    if(props.data){
      var name = props.data.textHeader1;
      var description= props.data.textHeader2;
    }

    return (
   <div id="home" className="header col-12">
      <Navbar bg="light" expand="lg" className="row">
         <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Navbar.Brand className="container" href="#home"><img style={{width:"auto",height:"50px"}}  src="public/assets/logo-soho.png" alt="logo-soho"/></Navbar.Brand>
               <Nav className="me-auto">
                  <Nav.Link href="#home" className="text-light">inicio</Nav.Link>
                  <Nav.Link href="#about" className="text-light">nosotros</Nav.Link>
                  <Nav.Link href="#services" className="text-light">servicios</Nav.Link>
                  <Nav.Link href="#projects" className="text-light">casos de éxito</Nav.Link>
                  <Nav.Link href="#testimonials" className="text-light">únete al equipo</Nav.Link>
                  <Nav.Link href="#contact" className="text-light">contacto</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>

      <div className="row col-12 banner mt-5">
         <div className="banner-text mt-5">
            <h1 className="header-title text-center mt-5">{name}</h1>
            <h3 className='text-center mb-5' > <span className="header-description">{description}</span></h3>

         </div>
         <ButtonLarge
               text={"HABLEMOS DE TU PROYECTO"}
            />
         <div className='conference-header text-center w-100'>         
         <Conference
            location={"DIGITAL BANK MONTEVIDEO."}
            topic={"Experiencia de Usuario"}
            name={"Alvaro Añón (SEO de Soho)."}
         />
      </div>
      </div>
   </div>
  );
}


export default Header;