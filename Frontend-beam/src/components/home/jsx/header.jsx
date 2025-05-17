import logo from "../../../assets/logo.jpg";
import React from "react";
import '../css/header.css';
import beamtel from "../../../assets/BEAMTEL.png";

const header = () => {
    return (
        <div className="hero-overlay">
            <header className="hero-header"> {/* New header inside hero */}
                <div className="logo">
                    <img src={beamtel} alt="BEAMTEL" className="beamtel-img" />
                </div>
                <nav className="nav">
                    <ul>
                        <li><i className="bi bi-geo-alt" style={{ color: 'black' }}> </i> <a href="#references"> 10 rue ghandi, Rabat</a></li>
                        <li><i className="bi bi-envelope" style={{ color: 'black' }}> </i> <a href="mailto:contact@beamtel.ma">contact@beamtel.ma</a></li> {/* Ajout de l'email */}
                        <li><i className="bi bi-telephone" style={{ color: 'black' }}> </i> <a href="#partners" style={{ marginRight: 50 }}> Contact</a></li>
                        <li><a href="https://www.instagram.com/beamtel?igsh=MW45ajc1azNwZWwwaQ=="><i className="bi bi-instagram" style={{ color: 'black' }}> </i></a></li>
                        <li><a href="https://www.linkedin.com/company/beamtel/"><i className="bi bi-linkedin" style={{ color: 'black' }}> </i></a></li>
                        <li><a href="#career"><i className="bi bi-globe" style={{ color: 'black', marginRight: 50 }}> </i></a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default header;
