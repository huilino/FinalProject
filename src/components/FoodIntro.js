import React from 'react';
import '../assets/css/foodintro.css';

export default function FoodIntro({img1, img2}) {
  return (
    <div className="foodintro">
        <div className="image-text">
            <h2>PICK YOUR PROTEIN</h2>
            <p><em>Beef, Chicken, Fish -- We`ve got it all!</em></p>
        </div>
        <div className="image-container">
            <div className="foodimage">
                <img src={img2} alt=''></img>
            </div>
            <div className="foodimage">
                <img src={img1} alt=''></img>
            </div>
        </div>
    </div>
  )
}
