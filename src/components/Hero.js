import React from 'react';
import '../assets/css/herostyle.css';
import {useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

export default function Hero() {
  let navigate = useNavigate();
  return (
    <>
    <div className="quote">
      <p className="quote-text"><FaQuoteLeft/>One cannot think well, love well, sleep well, if one has not dined well.</p>
      <p className="quote-author"><em>― Virginia Woolf, A Room of One's Own</em></p>
      <p className="quote-text">We must have a pie. Stress cannot exist in the presence of a pie.<FaQuoteRight/></p>
      <p className="quote-author"><em> ― David Mamet, Boston Marriage</em></p>
    </div>
    <div className="hero">
        <div className="container">
            <div className="content">
                    <h1>Cooking</h1>
                    <h3><em>IS LOVE</em></h3>
                    <p>made visible </p>
                    <Button onClick={() => navigate("/searched/:search")} variant = "secondary" className = "btn">
                      Search Recipe
                    </Button>
            </div>
        </div>
    </div>
    </>
  )
}
