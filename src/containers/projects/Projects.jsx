import React from 'react';
import '../../styles/custom.scss';
import Titulo from '../../components/Titulo/Titulo';

const Projects = (props) => {
    
    if(props.data){
        var title = props.data.projectsTitle;
        var text = props.data.projectsDescription;
        }
  
    return (
      <div id="projects" className="projects" >
        <div className="container projects-margin-top">
              <Titulo title={title}/>
                <p className='container text-center col-12 col-md-9'>{text}</p>
           </div>
      </div>
    )
  }


export default Projects