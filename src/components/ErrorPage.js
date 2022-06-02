import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="error-page">
        <h1>Page Not Found!</h1>
        <Link to="/">
            <Button style={{fontSize:'30px' , padding:'10px', marginLeft:'10px'}} variant = "warning" className = "btn">Go to Home</Button>
        </Link>
    </div>
  )
}
