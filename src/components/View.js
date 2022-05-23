import React,{useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import { getSpecificUserInput} from '../userinputservices/UserInputServices';

export default function View() {

    const [userInput, setUserInput] = useState();

        const refreshUserInput = async() => {
        // const userInputId = userInput.target.value
        const specificUserInput = await getSpecificUserInput();
        setUserInput(specificUserInput);
        console.log("Viewuser",userInput);
      }
    
      useEffect(() => {
          refreshUserInput();
      }, [])
    
    
    // useEffect(() => {
    //    getSpecificUserInput();
    //    setUserInput(userInput)
    // }, []);

    console.log("testing",userInput)
  return (
    <div className = "view-review">
        {/* {console.log("testing",userInput)}  */}
        {userInput && ( 
        <>
            <div className = "user-card">
                <div className="user-detail">
                    <h2 className="user-name">Name</h2>
                    <h2 className="user-recipe">Recipe</h2>
                    <h2 className="user-suggestion">Suggestion</h2>
                </div>
                <div className="user-info">
                    <h2 className="user-name">{userInput.name}</h2>
                    <h2 className="user-recipe">{userInput.recipe}</h2>
                    <h2 className="user-suggestion">{userInput.suggestion}</h2>
                </div>
            </div>
 
        </>
        )}
    
        <Link to="/" className="home-btn"><h2>Back to Home</h2></Link>
    </div>

 )
}

