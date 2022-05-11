import React from 'react'
import ButtonLarge from '../../components/button/ButtonLarge';
import Conference from '../../components/conference/Conference';
import { Navbar, Nav, Container,} from 'react-bootstrap';
import '../../styles/containers/header.scss';

const Header = (props) => {

    if(props.data){
      var name = props.data.textHeader1;
      var description= props.data.textHeader2;
     
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Ver menú</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Ocultar menú</a>
         
         <ul id="nav" className="nav">
            
            <img src="public/assets/logo-soho.png" className='brand' alt="logo-soho"/>
            <li className="current"><a className="smoothscroll" href="#home">inicio</a></li>
            <li><a className="smoothscroll" href="#about">nosotros</a></li>
	         <li><a className="smoothscroll" href="#services">servicios</a></li>
            <li><a className="smoothscroll" href="#projects">casos de éxito</a></li>
            <li><a className="smoothscroll" href="#testimonials">únete al equipo</a></li>
            <li><a className="smoothscroll" href="#contact">contacto</a></li>
         </ul>

      </nav>

   {/* <Navbar bg="light" expand="lg">
      <Container>
    <Navbar.Brand className="container" href="#home"><img  src="public/assets/logo-soho.png" alt="logo-soho"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline text-center">{name}</h1>
            <h3 className='text-center mb-5' > <span>{description}</span></h3>


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

      {/* <p className="scrolldown"> */}

         {/* <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a> */}
      {/* </p> */}
 
      

   </header>
  );
}


export default Header;