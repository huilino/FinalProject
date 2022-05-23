import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/recipecard.css';
import {Card, Button} from 'react-bootstrap';
import RecipeDetails from './RecipeDetails';

export default function RecipeCard({id,title,image,ingredients,source,url}) {
  const[show, setShow] = useState(false);

  return (
    <Card className="recipe-card" style={{ width: '500px' }}>
      <img className="recipe-image" src={image} alt={title}></img>
    <Card.Body>
      <Card.Title className="recipe-label">
      <Link to={"/recipe/"+ id}> 
        <h3>
          {title.length < 15 ? `${title}`: `${title.substring(0,20)}...`}
        </h3>
      </Link>
      </Card.Title>
      <Card.Text>
        <h4 className="source"> Source : {source} </h4>
      </Card.Text>
        <a href={url} >View Recipe</a>
    </Card.Body>
    <Button onClick={() => setShow(!show)}variant="secondary" className="view-btn">View Ingredients</Button>
    {show && <RecipeDetails ingredients = {ingredients}/>}
  </Card>
  )
}

