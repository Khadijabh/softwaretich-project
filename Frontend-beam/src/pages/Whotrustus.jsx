import React from 'react';
import { FaHandshake } from 'react-icons/fa';
import Header from "../components/home/jsx/header";
import Navbar from "../components/home/jsx/navbar";
import Footer from "../components/Footer";

import Tibari from "../assets/Tibari.png";
import C1 from "../assets/WHO/C1.png";
import C2 from "../assets/WHO/C2.png";
import C3 from "../assets/WHO/C3.png";
import C4 from "../assets/WHO/C4.png";
import C5 from "../assets/WHO/C5.png";
import C6 from "../assets/WHO/C6.png";
import C7 from "../assets/WHO/C7.png";
import C8 from "../assets/WHO/C8.png";
import C9 from "../assets/WHO/C9.png";
import C10 from "../assets/WHO/C10.png";
import C11 from "../assets/WHO/C11.png";

import "./Whotrustus.css";
import {text} from "framer-motion/client";

const whotData = [
    {
        img: C1,
        text: "Implémentation de 200 Endpoint Detection Response (EDR)\nConseil sur les pratiques ISO27001"
    },
    {
        img: C2,
        text: "Implémentation de la solution Firewall XGS de Sophos."
    },
    {
        img: C3,
        text: "Deal Fortinet en cours.\n Implémentation de Fortiweb VM"
    },
    {
        img: C4,
        text: "Implémentation EDR"
    },
    {
        img: C5,
        text: "Accompagnement à la certification ISO27001 en France."
    },
    {
        img: C6,
        text: "Accompagnement la maitrise du standard\ncyber sécurité pour la 5G En France."
    },
    {
        img: C7,
        text: "Technical Audit\nWireless capacity and security. \n Implémentation du Firewall XGS de Sophos."
    },
    {
        img: C8,
        text: ""
    },
    {
        img: C9,
        text: "Contrat 2 ans : 6 Consultants en Transformation digitale.\n Client : Ministère de La Santé au Maroc."
    },
    {
        img: C10,
        text: "Contrat Cadre : Consultants en\nIngénierie/Conseils/R&D Labs"
    },
    {
        img: C11,
        text: "Partenaire et Sponsor DIAMOND"
    }

];

const Whotrustus = () => {
    return (
        <div>
            <Header />
            <Navbar />

            <div className="trust-section">
                <div className="founder-section">
                    <div className="founder-content">
                        <h2 className="founder-title">MOT DU FONDATEUR</h2>
                        <img src={Tibari} alt="Tibari" className="founder-image" />
                        <p className="founder-quote">
                            La cybersécurité est devenue une arme, une force et une priorité à avoir
                            dans différents types d'entreprises. Nous sommes convaincus par les solutions
                            que nous intégrons et nous sommes partenaires de 2 des 10 premiers fournisseurs
                            mondiaux du secteur de la cyberdéfense et cybersécurité au monde.
                        </p>
                    </div>

                    <div className="trust-container">
                        <h2 className="trust-title">
                            <FaHandshake className="trust-icon" />Quelques CLIENTS CYBER SÉCURITÉ
                        </h2>

                        <div className="whot-grid">
                            {whotData.slice(0, 8).map((whot, index) => (
                                <div key={index} className="whot-card">
                                    <img src={whot.img} alt={`C${index + 1}`} className="whot-logo" />
                                    <p className="whot-text">{whot.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="trust-container">
                        <h2 className="trust-title">
                            <FaHandshake className="trust-icon" />Quelques CLIENTS IT/TELCO
                        </h2>

                        <div className="whot-grid">
                            {whotData.slice(7, 11).map((whot, index) => (
                                <div key={index} className="whot-card">
                                    <img src={whot.img} alt={`C${index + 9}`} className="whot-logo" />
                                    <p className="whot-text">{whot.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>



                </div>
            </div>

            <Footer style={{ marginTop: "200px" }} />
        </div>
    );
};

export default Whotrustus;
