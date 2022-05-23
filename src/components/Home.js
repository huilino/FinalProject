import React from 'react';
import image1 from '../assets/images/image1.webp';
import carousel1 from '../assets/images/carousel1.jpg';
import image4 from '../assets/images/image4.webp';
import image5 from '../assets/images/image5.jpg';
import dish1 from '../assets/images/dish1.jpg';
import FoodIntro from './FoodIntro';
import Hero from './Hero';
import Footer from './Footer';
import FoodCarousel from './FoodCarousel';

export default function Home() {
  return (
    <>
        <FoodCarousel c1={image4} c2={carousel1} c3={image5}/>
        <Hero/>
        <FoodIntro img1={dish1} img2={image1}/>
        <Footer/> 
    </>
  )
}

    
