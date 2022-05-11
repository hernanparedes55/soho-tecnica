import React from 'react';
import Titulo from '../../components/Titulo/Titulo';
import '../../styles/custom.scss';


const Nosotros = (props) => {

    if(props.data){
      var text = props.data.aboutText;
      var title = props.data.aboutTitle;
      }

  return (
    <div id="about" className="about">
      <div className="container col-12 about-margin-top">
            <Titulo title={title}/>
            <p className='container text-center col-12 col-lg-10'>{text}</p>
         </div>
   </div>
  )
}

export default Nosotros;