import React,{useState,useEffect} from 'react';
import {Table, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteUserInput, getUserInput, updateUserInput, getSpecificUserInput } from '../userinputservices/UserInputServices';

export default function UserReview() {

  const [userInputs, setUserInputs] = useState([]);

  const refreshUserInput = async() => {
    const newUserInput = await getUserInput();
    setUserInputs(newUserInput.reverse());
    console.log("reviewsummary",userInputs);
   
  }
  

  useEffect(() => {
      refreshUserInput();
  }, [])

  const handleDelete = async (userInput) => {
    const userInputId = userInput.target.value;
    console.log("userreview handle delete", userInput.target.value)
    await deleteUserInput(userInputId);  
    refreshUserInput();
  }

  // const handleView = async (userInput) => {
  //   const userInputId = userInput.target.value;
  //   console.log("userreview handle view", userInput.target.value)
  //   await getSpecificUserInput(userInputId);  
  //   refreshUserInput();
  // }

  // const handleEdit = async (userInput) => {
  //   const userInputId = userInput.target.value;
  //   console.log("userreview handle edit", userInput.target.value)
  //   await updateUserInput(userInputId);  
  //   refreshUserInput();
  // }

  return (
      <div className="summary">
        <Link to ="/addreview" >
          <Button variant="dark">Add Review</Button>
        </Link>
          <h2 className="summary-title">User Review</h2>
          <Table striped bordered hover >
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Recipe</th>
                <th>Suggestion</th>
                <th>Action</th>
                </tr>
            </thead>
            
        {userInputs.map((userInput, index) => (
            <tbody>
                <tr key={index}>
                  <td>{userInput._id}</td>
                  <td>{userInput.name}</td>
                  <td>{userInput.recipe}</td>
                  <td>{userInput.suggestion}</td> 
                  <td className="flex justify-center items-center space-x-4 mt-3">
                <Link to={`/user/${userInput._id}`}>
                  <Button className="px-6 py-2" value={userInput._id} variant="light">View</Button>
                </Link>
                <Link to={`/editreview/${userInput._id}`}>
                  <Button className="px-6 py-2" value={userInput._id} variant="info">Edit</Button>
                </Link> 
                  <Button onClick={handleDelete} value={userInput._id} className="px-6 py-2" variant="warning">Delete</Button>
                </td> 
                </tr>
                
              </tbody>
            ))}
        </Table>
    </div>
  )
}
