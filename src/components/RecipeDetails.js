import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {ListGroup} from 'react-bootstrap';
import '../assets/css/recipedetails.css';

export default function RecipeDetails({ingredients}) {
  return ingredients.map(ingredient => {
      return(
          <ListGroup key={uuidv4()} variant="flush" className="ingredient-list">
              <ListGroup.Item className="ingredient-text">{ingredient.text}</ListGroup.Item>
          </ListGroup>
      )
  })
}


