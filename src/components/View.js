import React,{useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {Card, Button, Container,ListGroup,ListGroupItem} from 'react-bootstrap';
import '../assets/css/view.css';
import user from '../assets/images/user.jpg';

export default function View() {

    const [userInput, setUserInput] = useState();

        const refreshUserInput = async() => {
        const response = await fetch(`https://628b9e377886bbbb37bc3770.mockapi.io/api/v1/userinput/${id}`)
        const data= await response.json();
        setUserInput(data);
        console.log("Viewuser",data);
      }
      
      useEffect(() => {
          refreshUserInput();
      }, []);

      const {id} = useParams()
      const current = new Date();
      const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear() }`
      const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      console.log("Viewuser-testing",userInput);
   
  return (
    <Container fluid id="view-user">
{userInput && (
<Card id="view" style={{ width: '50rem', height:'50rem' }}>
  <Card.Img className="user-icon" variant="top" src={user} />
  <Card.Body>
    <Card.Text className="suggestion">
      {userInput.suggestion}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Name : {userInput.name}</ListGroupItem>
    <ListGroupItem>Recipe : {userInput.recipe}</ListGroupItem>
    <ListGroupItem className="text-muted"><small><em>Date Created: {date} / {time}</em></small></ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Link to= "/review">
    <Button className="goback-btn" variant="primary">Go Back</Button>
    </Link>
  </Card.Body>
</Card>
)}
    </Container>
 )
}

