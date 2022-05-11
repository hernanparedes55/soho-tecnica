import React from 'react';
//import Card from './Card';
import '../../styles/containers/services.scss';
import { CardGroup, Container, Card } from 'react-bootstrap';

  

const Services = (props) => {

    if(props.data){
        var title1 = props.data.title1;
        var text1 = props.data.text1;

        var title2 = props.data.title2;
        var text2 = props.data.text2;

        var title3 = props.data.title3;
        var text3 = props.data.text3;

    }

  return (
      <section id='services'>
          
                <CardGroup className='cards-group'>
                <Card >
                    <Card.Body className='bg-1 text-center text-light'>
                        <Card.Title className="title-service mt-5">{title1}</Card.Title>
                        <Card.Text className='container text-center mb-5 col-md-7 text-service'>{text1}</Card.Text>
                    </Card.Body>
                </Card>
                
                <Card>

                    <Card.Body  className='bg-2 text-center text-light'>
                        <Card.Title className="title-service mt-5">{title2}</Card.Title>
                        <Card.Text className='container text-center text-service col-md-7'>
                            {text2}
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>

                    <Card.Body  className='bg-3 text-center text-light'>
                        <Card.Title className="title-service mt-5">{title3}</Card.Title>
                        <Card.Text className='container text-center text-service col-md-7'>
                            {text3}
                        </Card.Text>
                    </Card.Body>

                </Card>  

                </CardGroup>

        </section>
  )
}


export default Services;