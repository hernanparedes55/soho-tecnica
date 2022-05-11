import React,{useState , useEffect} from 'react';
//import { Card } from 'react-bootstrap';
import '../../styles/components/projectApi.scss';

const ProjectApi = ({projectData}) => {

    const {id, title, description, logo, image} = projectData

    const [clase, setClase] = useState("");
    
    const controlarClase = () => {
        switch(id){
            case '1':
                setClase("project-1");
                break;
            case '2':
                setClase("project-2");
                break;
            case '3':
                setClase("project-3");
                break;
                default:
                    console.log('no entró a ningún case');
        }
            console.log("clases: ", clase);
    }

    useEffect(() => {
        controlarClase();      
    }, [])
    

    return (
        <div className={clase}>
    <div className='container'>

        <div className='row'>
  
            <div className='col-12 col-md-8 '>
  
            <div className="card card-style">

                <img src={image} className="card-img-top card-img-project" alt={title}/>
            </div>
            </div>

            <div className='col-12 col-md-4'>

                <div className="card-body card-body-style">

                        <img src={logo} className="card-img-left" alt={title}/>
                        <h5 className="card-title title-color">{title}</h5>
                        <p className="card-text text-color">{description}</p>
                        <a href="#" className="button-projects">VER DETALLES</a>
                </div>
   
              </div> 
            </div>
        </div>
    </div>
    
  )
}



export default ProjectApi;