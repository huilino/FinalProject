import React from 'react';
import {Carousel} from 'react-bootstrap';


export default function FoodCarousel({c1, c2, c3}) {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={c1} style={{ height: '500px' }}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Delicious Appetizers</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={c2} style={{ height: '500px' }}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Easy Dinner Ideas</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={c3} style={{ height: '500px' }}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Impressive Desserts that are suprisingly easy to make</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}