import React from 'react';
import '../../styles/containers/finalButton.scss';
import ButtonLarge from '../../components/button/ButtonLarge';
import {BiLocationPlus} from 'react-icons/bi';


const FinalButton = () => {
  return (
    <div className='container-fluid d-flex col-12 justify-content-center align-items-center text-center final-button'>
        <ButtonLarge
            text={"HABLEMOS DE TU PROYECTO"}
        />
        <div className='text-success icon-style'>
        <BiLocationPlus style={{height:"50px", width:"50px"}}/>
        </div>
    </div>
  )
}

export default FinalButton