import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Favorite() {

  const APP_ID = "4825be06";
  const APP_KEY = "efb4258b66fe2d8f0600c78b6793e3a1";

  let params = useParams();
  const[detail, setDetail] = useState({});
  
  const getDetails = async() => {
    const resp = await fetch(`https://api.edamam.com/search?r=http%3A%2F%2F${params.name}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    console.log("test",params.name);
    const detailRecipe = await resp.json();
    setDetail(detailRecipe);
  };

  useEffect(() => {
    getDetails();
  }, [params.name]);

  return(
    <div>
      <h1>test</h1>
      {detail.recipe}
    </div>
  ) 
}

//  https://api.edamam.com/api/recipes/v2/${params.name}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}
// https://api.edamam.com/api/recipes/v2/28705d59381c965b5c5b4d05bcd74f1a?app_id=${APP_ID}&app_key=${APP_KEY}&type=public

// http://www.edamam.com/ontologies/edamam.owl#recipe_5c6c2bf1f708a18ec6a2870eec9886ac

