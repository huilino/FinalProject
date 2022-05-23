import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { updateUserInput } from '../userinputservices/UserInputServices';

export default function EditReview() {

    const [name, setName] = useState("");
    const [recipe, setRecipe] = useState("");
    const [suggestion, setSuggestion] = useState("");

    const navigate = useNavigate();

    const [userInput, setUserInput] = useState([]);

    const refreshUserInput = async() => {
      const editUserInput = await updateUserInput();
      setUserInput(editUserInput);
    }
  
    useEffect(() => {
        refreshUserInput();
    }, []);
    
    const handleUpdate = (e) => {
        e.preventDefault();
        updateUserInput(userInput);
        console.log("update",userInput);
        navigate("/")
    }

  return (
    <div className="form-container">
    <form onSubmit={handleUpdate}> 
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
        <label htmlFor="exampleFormControlTextarea1" className="form-label ">Recipe Name</label>
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
          rows="3"
          name="suggestion"
          placeholder="Let us know how we can do better..."
          value={suggestion}
          onChange={(e)=>setSuggestion(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" className="submit-btn">Update Review</button>
      </div>
    </form>
  </div>
  )
}
