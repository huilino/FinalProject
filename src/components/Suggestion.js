import { Button, Form, Container } from 'react-bootstrap'
import React, {useEffect, useState} from 'react';
import '../assets/css/suggestion.css';
import UserForm from './AddReview';
import UserList from './UserList';
import { getUserInput, createUserInput, updateUserInput, deleteUserInput } from '../userinputservices/UserInputServices';

export default function Suggestion() {

    const [userInputs, setUserInputs] = useState([]);

    const refreshUserInput = async() => {
        const newUserInput = await getUserInput();
        setUserInputs(newUserInput);
        console.log(userInputs);
    }

    useEffect(() => {
        refreshUserInput();
    }, [])

    const addUserInput = (userInput) => {
        setUserInputs([...userInputs, userInput]);
    };
    console.log(userInputs);
    
  return (
    <div className="suggestion">
        <div className="container">
            <div className="content">
                    <h4>WE VALUE YOUR INPUT</h4>
                    <p>Have you try one of our recipes?
                    Let us know what you think. We would love to hear from you
                    </p>
            </div>
            <UserForm addUserInput = {addUserInput}/>
            <UserList userInputs={userInputs}/>
        </div>

    </div>
  )
}
