import React from 'react';
import Titulo from '../../components/Titulo/Titulo';
import '../../styles/containers/nosotros.scss'


const Nosotros = (props) => {

    if(props.data){
      var text = props.data.aboutText;
      var title = props.data.aboutTitle;
 
      }

  return (
    <section id="about">
      <div className="container" style={{marginTop:"80px"}}>
            <Titulo title={title}/>
            <p className='container text-center col-12 col-lg-10'>{text}</p>
         </div>
   </section>
  )
}

export default Nosotros;