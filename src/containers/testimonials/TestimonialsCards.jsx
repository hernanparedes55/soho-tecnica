import React from 'react';
import '../../styles/containers/TestimonialsCards.scss';
import { CardGroup, Container, Card } from 'react-bootstrap';

    

const TestimonialsCards = (props) => {


    if(props.data){

        var name1 = props.data.testimonialsName1;
        var text1 = props.data.testimonialsText;

        var name2 = props.data.testimonialsName2;
        var text2 = props.data.testimonialsText;

        var name3 = props.data.testimonialsName3;
        var text3 = props.data.testimonialsText;

    }

  return (
      <section className='testimonials-cards col-12'>
    
                <CardGroup >
                <Card style={{backgroundColor: "#1f2329"}}>
                    <Card.Img  src="public\assets\1.png" alt="testimonials-1" />
                    <Card.ImgOverlay className='text-center text-light mt-5'>
                        <Card.Title style={{marginTop:"250px"}}>{text1}</Card.Title>
                        <Card.Text className='mt-5 col-md-12'>{name1}</Card.Text>
                    </Card.ImgOverlay>
                </Card>

                <Card style={{backgroundColor:"#1f2329"}}>
                    <Card.Img src="public\assets\3.png" alt="testimonials-1" />
                    <Card.ImgOverlay className='text-center text-light mt-5'>
                        <Card.Title style={{marginTop:"250px"}}>{text2}</Card.Title>
                        <Card.Text className='mt-5 col-md-12'>{name2}</Card.Text>
                    </Card.ImgOverlay>
                </Card>

                <Card style={{backgroundColor: "#1f2329"}}>
                    <Card.Img src="public\assets\2.png" alt="testimonials-1" />
                    <Card.ImgOverlay className='text-center text-light mt-5'>
                        <Card.Title style={{marginTop:"250px"}}>{text3}</Card.Title>
                        <Card.Text className='mt-5 col-md-12'>{name3}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                
           </CardGroup>
        
        </section>
  )
}


export default TestimonialsCards;