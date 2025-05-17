import React, {useState} from 'react';
import '../css/navbar.css';
import logo from '../../../assets/logo.jpg';
import { Link } from "react-router-dom";
import {FaLinkedin} from "react-icons/fa";

const Navbar = () => {
    const [showCyberMenu, setShowCyberMenu] = useState(false);
    return (


            <div className="hero-overlay another-overlay">
                <section className="py-16 text-center"></section>
                <header className="another-section">  {/* another section */}
                    <nav className="nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Products">Products</Link></li>
                            <li><Link to="/partners">Partners</Link></li>

                            <li><Link to ="/Whotrustus">Who trust us ?</Link></li>

                            <li><Link to ="/career">Contact us</Link></li>
                            <li><button id="btn1" style={{ marginLeft: 630}}><Link to="/login"><b>Login</b></Link></button></li>
                            <li><button id="btn2"><Link to="/SignUp"><b>Signup</b></Link></button></li>
                        </ul>
                    </nav>
                </header>


            </div>
    );
};

export default Navbar;