import React from 'react';
import { Button } from 'react-bootstrap';
import {BsFacebook, BsInstagram, BsTwitter, BsPinterest} from 'react-icons/bs'
import '../assets/css/footer.css';

export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="col-lg-9 m-auto mt-3 text-center">
                <h3 className="subscribe">Subscribe to Our Newsletter</h3>
                <p className="para">All the latest recipes straight to your email</p>
                <input className="input" type="text" placeholder="Enter your Email"/>
                <Button type="button" className="btn2">Sign Up</Button>
            </div>
            <div className="container footer-about">
                <div className="row footer-row">
                    <div className="col-sm-12 col-md-6 about">
                        <h6 className="about-label">ABOUT</h6>
                        <p className="text-justify para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>
                    </div>
    
                    <div className="col-xs-6 col-md-3 learn-more">
                        <h6 className="learnmore-label">Learn More</h6>
                            <ul className="footer-list">
                                <li>Advertise</li>
                                <li>Content Licensing</li>
                                <li>Contact Us</li>
                            </ul>
                    </div>
    
                    <div className="col-xs-6 col-md-3 social">
                        <h6 className="connect-label">Lets Connect</h6>
                            <ul className="footer-list">
                                <li><BsFacebook className="icon"/></li>
                                <li><BsInstagram className="icon"/></li>
                                <li><BsTwitter className="icon"/></li>
                                <li><BsPinterest className="icon"/></li>
                            </ul>
                    </div>
                </div>
                <hr></hr>
            </div>
            <div className="container">
                <div className="row">
                    <p className="copyright">Copyright &copy; 2022 All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
)
} 

