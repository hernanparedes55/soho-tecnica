import React from 'react';
import '../../styles/components/projects.scss';
import Titulo from '../../components/Titulo/Titulo';

const Projects = (props) => {
    
    if(props.data){
        var title = props.data.projectsTitle;
        var text = props.data.projectsDescription;

        }
  
    return (
      <section id="projects" >
        <div className="container" style={{marginTop:"80px"}}>
  
              <Titulo title={title}/>
                <p className='container text-center col-12 col-md-9'>{text}</p>
              
           </div>
        
  
     </section>
    )
  }


export default Projects