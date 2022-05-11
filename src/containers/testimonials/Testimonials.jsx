import React from 'react';
import Titulo from '../../components/Titulo/Titulo';
import '../../styles/custom.scss';


const Testimonials = (props) => {

    if(props.data){
      var title = props.data.testimonialTitle;
      }

  return (
    <div id="testimonials" className="testimonials">
      <div className="container" style={{marginTop:"100px"}}>
            <Titulo title={title}/>
         </div>
   </div>
  )
}

export default Testimonials;