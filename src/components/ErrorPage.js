import React from 'react';
import {Button} from 'react-bootstrap';

export default function ErrorPage() {
  return (
    <div className="error-page">
        <h3>Search Not Found!</h3>
        <Button variant = "warning" className = "btn">Go to Home</Button>
    </div>
  )
}
