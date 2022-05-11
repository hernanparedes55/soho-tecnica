import React from 'react';
import '../../styles/custom.scss';
import ButtonLarge from '../../components/button/ButtonLarge';
import {BiLocationPlus} from 'react-icons/bi';


const FinalButton = () => {
  return (
    <div id="contact" className='container-fluid d-flex col-12 justify-content-center align-items-center text-center final-button'>
        <ButtonLarge
            text={"HABLEMOS DE TU PROYECTO"}
        />
        <div className='icon-style'>
        <BiLocationPlus style={{height:"50px", width:"50px"}}/>
        </div>
    </div>
  )
}

export default FinalButton