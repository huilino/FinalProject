import React from 'react';
import {BsFacebook, BsInstagram, BsTwitter, BsPinterest} from 'react-icons/bs'
import '../assets/css/footer.css';

export default function Footer() {
  return (

    <div className="footer">
        <div className="container">
            <div className="col">
                <h4>Learn More</h4>
                <p>Subscribe to our Newsletter</p>
            </div>
            <div className="col">
                <h4>Get In Touch</h4>
                <p>+123 2345 9823</p>
                <p>foodparadise@abc.com</p>
            </div>
            <div className="col">
                <h4>Lets Connect</h4>
                <BsFacebook className="icon"/>
                <BsInstagram className="icon"/>
                <BsTwitter className="icon"/>
                <BsPinterest className="icon"/>
            </div>
        </div>
        <p className="copyright">&copy; Copyright 2022 | All Rights Reserved</p>
    </div>
  )
}
