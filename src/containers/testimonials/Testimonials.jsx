import React from 'react';
import Titulo from '../../components/Titulo/Titulo';
import '../../styles/containers/testimonials.scss'


const Testimonials = (props) => {

    if(props.data){
      var title = props.data.testimonialTitle;
      }

  return (
    <section className="testimonials">
      <div className="container" style={{marginTop:"100px"}}>
            <Titulo title={title}/>
         </div>
   </section>
  )
}

export default Testimonials;