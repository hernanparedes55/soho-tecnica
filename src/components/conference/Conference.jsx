import React from 'react';
import ButtonSmall from '../button/ButtonSmall';
import '../../styles/components/conference.scss';


const Conference = (props) => {
    const{location, topic, name} = props
  return (

    <div className='text-center conference-section w-100 d-flex justify-content-left align-items-center'>
        <img src="/assets/live.png" className='m-2' />
        <p className='m-2'>EN DIRECTO - SOHO está presente en el {location} "{topic}" por {name}</p>
        <ButtonSmall
            text={"VER EVENTO"}
            type={"light"}
        />
        <ButtonSmall
            text={"PRÓXIMOS EVENTOS"}
            type={"dark"}
        />
    </div>

  )
}

export default Conference;