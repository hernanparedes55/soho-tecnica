import React,{useState, useEffect} from 'react';
import ProjectApi from './ProjectApi';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';


const ProjectsList = () => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading]=useState(true)

    useEffect(() => {
        const getProjects = async () => {
            const url = `https://627961a64a5ef80e2c08fcc0.mockapi.io/projects`;

            const resultado = await axios.get(url);
            setProjects(resultado.data)
            setLoading(false);
        }
        getProjects();
    }, [])

    console.log("projects:", projects);

  return (

    <div>
        {loading && <Spinner animation="border" style={{color: "rgba(204,100,28,100)"}} />} 


        {!loading && projects.map(project => (
            <div key={project.id}>
            <ProjectApi
                projectData = {project}
            />
            </div>
        ))}
        
    </div>
  )
 }


export default ProjectsList;