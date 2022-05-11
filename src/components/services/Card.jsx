import React from 'react';
import '../../styles/custom.scss';
//import {} from 'react-bootstrap';


const Card = ({title,text}) => {

  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
    <div className="card-body text-light">
      <h4 className="card-title">{title}</h4>
      <p className="card-text text-secondary">
        {
        text ? text : 'No existe descripción'
        }
      </p>
      
    </div>
    </div>
  )
}

export default Card