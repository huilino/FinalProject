import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/addreview.css';
import { createUserInput } from '../API/UserInputServices';

export default function AddReview() {

  const [name, setName] = useState("");
  const [recipe, setRecipe] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const navigate = useNavigate();

  const userInput = {
    name : name,
    recipe : recipe,
    suggestion : suggestion
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === "" || recipe === "" || suggestion === "") {
            alert("Please fill in all the fields");
        }
        createUserInput(userInput);
        navigate("/review");// redirect to userReview page
        console.log("create", userInput);
 
    }
    
  return (

<div className="addreview">
    <div className="content">
        <h4>WE VALUE YOUR INPUT</h4>
        <p>Have you try one of our recipes?
        Let us know what you think. We would love to hear from you
        </p>
    </div>
      <form className="addreview-form" onSubmit={handleSubmit}> 
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input 
            type="text" 
            name="name" 
            className="form-control form-control-lg"
            placeholder="Name" 
            value={name} 
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Recipe Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            name="recipe"
            placeholder="Recipe name..."
            value={recipe}
            onChange={(e)=>setRecipe(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" className="form-label ">Suggestion</label>
          <textarea
            type="text"
            className="form-control form-control-lg"
            rows="5"
            name="suggestion"
            placeholder="Let us know how we can do better..."
            value={suggestion}
            onChange={(e)=>setSuggestion(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
  </div>
  );           

}
