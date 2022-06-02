import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/recipe.css';
import RecipeCard from './RecipeCard';
import Search from './Search';
import {v4 as uuidv4} from 'uuid';

export default function Recipe() {

  const APP_ID = "4825be06";
  const APP_KEY = "efb4258b66fe2d8f0600c78b6793e3a1";

  const[searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async(query) => {
    const resp = await fetch(`http://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await resp.json();
    console.log(data.hits);
    setSearchedRecipes(data.hits);
  };

  useEffect(() => {
    getSearched(params.search);
  },[params.search]);

  return (
    <>
    <Search/>
    {searchedRecipes.length > 0
    ? (
      <div className="my-recipe">
      {searchedRecipes.map((item) => 
        <RecipeCard
          key={uuidv4()} 
          id={item.recipe.uri} 
          title={item.recipe.label}
          image={item.recipe.image}
          source={item.recipe.source}
          ingredients={item.recipe.ingredients}
          url={item.recipe.url}
        />)}
  </div>
    ) : (
      <div className="empty">
        <h2>Oops! No recipes found</h2>
      </div>
    )
    }
     </>
  )
}


