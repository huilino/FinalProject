import React,{useState} from 'react';
import '../assets/css/recipecard.css';
import {Card, Button} from 'react-bootstrap';
import RecipeDetails from './RecipeDetails';

export default function RecipeCard({title,image,ingredients,source,url}) {
  const[show, setShow] = useState(false);

  return (
    <Card className="recipe-card" style={{ width: '500px' }}>
      <img className="recipe-image" src={image} alt={title}></img>
    <Card.Body>
      <Card.Title className="recipe-label">
        <h3>
          {title.length < 15 ? `${title}`: `${title.substring(0,20)}...`}
        </h3>
      </Card.Title>
      <Card.Text>
        <h4 className="source"> Source : {source} </h4>
      </Card.Text>
        <a href={url} className="view-recipe">Recipe</a>
    </Card.Body>
    <Button onClick={() => setShow(!show)}variant="secondary" className="viewing-btn">View Ingredients</Button>
    {show && <RecipeDetails ingredients = {ingredients}/>}
  </Card>
  )
}

