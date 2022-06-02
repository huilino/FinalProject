import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../assets/css/editreview.css';

export default function EditReview() {

    const [name, setName] = useState("");
    const [recipe, setRecipe] = useState("");
    const [suggestion, setSuggestion] = useState("");
    
    const navigate = useNavigate();
    const {id} = useParams();

    const refreshUserInput = async() => {
    const response = await fetch(`https://628b9e377886bbbb37bc3770.mockapi.io/api/v1/userinput/${id}`)
    const data = await response.json();
    setName(data.name);
    setRecipe(data.recipe);
    setSuggestion(data.suggestion);
    console.log("Edit-user",data.name);
    }

    useEffect(() => {
        refreshUserInput();
    }, []);

    const handleSubmit = (e) =>  {
      handleUpdate(e);
      navigate("/review");
    }

    const handleUpdate = async (e) => {
     e.preventDefault();
      try{
        const response = await fetch(`https://628b9e377886bbbb37bc3770.mockapi.io/api/v1/userinput/${id}`,
        {
          method : "PUT",
          headers : 
          {
              "Content-Type": "application/json"
          },
          body : JSON.stringify({ _id: id , name: name , recipe: recipe, suggestion: suggestion})
        })  
        console.log("edit", response);
        return await response.json;
    }
    catch (e) {
        console.log(e);
        return null;
    }
  }
 
  return (
    <div className="form-container">
    <form className = "editreview" onSubmit={handleSubmit}> 
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
