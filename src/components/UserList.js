import React from 'react';
import {BsTrash} from 'react-icons/bs';
import {FaUserEdit} from 'react-icons/fa';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/userlist.css';


export default function UserList({userInputs}) {

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`

  return (
   
      <div className="userlist">
        
          {userInputs.map((userInput) => (
            <div>
           <Card className="user-review" key={userInput._id} border="light" className="userlist" >
           <Card.Header className="header" as ="h5">{userInput.recipe}</Card.Header>
           <Card.Body>
             <Card.Text>{userInput.suggestion}</Card.Text>
           </Card.Body>
           <Card.Body>
              <FaUserEdit 
                className="edit"
                // onClick={() => onEdit(userInput)}
              />
              <BsTrash 
                className="delete"
                // onClick={() => onDelete(userInput)}
              /> 
           </Card.Body>
           <Card.Footer>
             <small className="text-muted">
               <h5>{userInput.name}</h5> 
               {`Date Created : ${date}`} 
              </small>
           </Card.Footer>
         </Card>
         </div>
          ))}
           
          
   </div>
   
  )
}


