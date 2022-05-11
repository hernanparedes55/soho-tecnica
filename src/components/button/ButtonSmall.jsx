import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/components/buttonSmall.scss';

const ButtonSmall = (props) => {

    const {text,type} = props

    // console.log('type', type);
  return (
    
    <div className='button-sm'>
    {type == "light" ? 
    <Button variant="success" className='button-sm-light'>{text}</Button>
    :
    <Button variant="dark" className='button-sm-dark'>{text}</Button>
    
    }
    </div>
    )
}

export default ButtonSmall