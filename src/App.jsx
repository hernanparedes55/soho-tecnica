import { Fragment,useEffect, useState } from 'react'
import Header from './containers/header/Header';
import Nosotros from './containers/about/Nosotros';
import $ from 'jquery';
import Services from './containers/services/Services';
import Projects from './containers/projects/Projects';
import ProjectsListContainer from './components/projects/ProjectsList';
import Testimonials from './containers/testimonials/Testimonials';
import TestimonialsCards from './containers/testimonials/TestimonialsCards';
import Footer from './containers/footer/Footer';
import FinalButton from './containers/final-button/FinalButton';

// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  const [foo, setFoo] = useState('bar');
  const [resumeData, setResumeData] = useState({})

  //Busco y extraigo los valores del json y los guardo en "resumeData".
  useEffect(() => {
    const getResumeData = () =>{
        $.ajax({
        url:'/resumeData.json',
        dataType:'json',
        cache: false,
        success: function(data){
          setResumeData(data);
        }.bind(foo),
        error: function(xhr, status, err){
          console.log(err);
          alert(err);
        }
      });
    }
      getResumeData();
    
  }, []);
  
  // console.log(resumeData)

  return (
    <div className='App'>
    
    <Header data={resumeData.main}/>
    <Nosotros data={resumeData.main}/>
    <Services data={resumeData.cards}/>
    <Projects data={resumeData.projects}/>
    <ProjectsListContainer />
    <Testimonials data={resumeData.main}/>
    <TestimonialsCards data={resumeData.main} />
    <FinalButton/>
    <Footer />
    </div>
  );
}

export default App;
