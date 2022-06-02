import React,{useState,useEffect} from 'react';
import {Table, Button,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/userreview.css';
import { deleteUserInput, getUserInput} from '../API/UserInputServices';

export default function UserReview() {

  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
  const [userInputs, setUserInputs] = useState([]);

  const refreshUserInput = async() => {
    const newUserInput = await getUserInput();
    setUserInputs(newUserInput.reverse());
    console.log("User-review: refreshUserInput", newUserInput)
  }
  
  useEffect(() => {
      refreshUserInput();
  }, [])

  const handleDelete = async (userInput) => {
    
    const userInputId = userInput.target.value;
    if(window.confirm(`Are you sure you want to delete?`)){
    console.log("userreview handle delete", userInput.target.value)
    await deleteUserInput(userInputId);  
    refreshUserInput();
    }
  }

  return (
    <div id="review-list">
      <Container>
        <div className="addreview-btn">
          <Link to ="/addreview" >
            <Button className="add-btn" variant="dark">Add Review</Button>
          </Link>
        </div>
          <Table className="review-summary">
            <thead>
                <tr>
                <th>Date Created</th>
                <th style={{width:"200px"}}>Name</th>
                <th style={{width:"200px"}}>Recipe</th>
                <th>Suggestion</th>
                <th>Action</th>
                </tr>
            </thead>
            
        {userInputs.map((userInput, index) => (
            <tbody>
                <tr key={userInput._id}>
                  <td style={{width:"300px"}} >{date}</td>
                  <td style={{width:"300px"}}>{userInput.name}</td>
                  <td>{userInput.recipe}</td>
                  <td style={{width:"800px"}}>{userInput.suggestion.length < 30 ? `${userInput.suggestion}` : 
                    `${userInput.suggestion.substring(0,40)}...`}</td> 
                  <td style={{width:"600px"}} className="flex justify-center items-center space-x-4 mt-3">
                <Link to={`/user/${userInput._id}`}>
                  <Button className="px-6 py-2 view-btn" value={userInput._id} variant="light">View</Button>
                </Link>
                <Link to={`/editreview/${userInput._id}`}>
                  <Button className="px-6 py-2 edit-btn" value={userInput._id} variant="info">Edit</Button>
                </Link> 
                  <Button onClick={handleDelete} value={userInput._id} className="px-6 py-2 delete-btn" variant="warning">Delete</Button>
                </td> 
                </tr>
              </tbody>
            ))}
        </Table>
      </Container>
    </div>
  )
}
