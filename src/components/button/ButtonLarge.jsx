import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/custom.scss';

const ButtonLarge = (props) => {

  const {text} = props
  return (
    <div>
    <Button variant="success" className='button-lg'>{text}</Button>
    </div>
  )
}

export default ButtonLarge