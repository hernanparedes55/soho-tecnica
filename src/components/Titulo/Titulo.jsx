import React from 'react'
import '../../styles/components/titulo.scss'

const Titulo = (props) => {
    
  return (
    <div className='container'>
        <h1 className='title-component text-center' >
            {props.title}
        </h1>
        <hr style={{color: "#98d241", height:"4px", margin:"0 auto",width:"100px",marginTop:"20px",marginBottom:"20px",opacity:"1.1"}}/>
        
    </div>
  )
}

export default Titulo