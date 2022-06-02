import React from 'react';
import {Carousel} from 'react-bootstrap';
import '../assets/css/carousel.css';


export default function FoodCarousel({c1, c2, c3}) {
  return (
    <Carousel id="recipe-carousel">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={c1} style={{ height: '500px' , objectFit: 'cover'}}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="slide-label">First slide label</h3>
        <p className="slide-para">Delicious Appetizers</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={c2} style={{ height: '500px' ,objectFit: 'cover'}}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3 className="slide-label">Second slide label</h3>
        <p className="slide-para">Easy Dinner Ideas</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={c3} style={{ height: '500px' ,objectFit: 'cover' }}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3 className="slide-label">Third slide label</h3>
        <p className="slide-para">Impressive Desserts that are suprisingly easy to make</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}