import logo from "../../../assets/logo.jpg";
import React from "react";
import '../css/header.css';

const header = () => {
    return (
<div className="hero-overlay">
    <header className="hero-header"> {/* New header inside hero */}
        <div className="logo">
            <img src={logo} alt="SOFTWERTICH" className="logo-img" />
        </div>
        <nav className="nav">
            <ul>
                <li><i className="bi bi-geo-alt" style={{ color: 'black' }}> </i> <a href="#references"> Rue Dakar, IMM N°5, APP N°1, Rabat</a></li>
                <li><i className="bi bi-telephone" style={{ color: 'black' }}> </i> <a href="#partners" style={{marginRight:50}}> Contact</a></li>
                <li><a href="#contact"><i className="bi bi-instagram" style={{ color: 'black' }}> </i></a></li>
                <li><a href="#contact"><i className="bi bi-facebook" style={{ color: 'black' }}> </i></a></li>
                <li><a href="https://www.linkedin.com/company/softwaretich/"><i className="bi bi-linkedin" style={{ color: 'black' }}> </i></a></li>
                <li><a href="#career"><i className="bi bi-globe" style={{ color: 'black', marginRight:50 }}> </i></a></li>

            </ul>

        </nav>
    </header>
</div>
    )
}
 export default header;