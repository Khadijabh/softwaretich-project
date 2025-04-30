import React from 'react';
import { FaShieldAlt, FaHandshake, FaGlobe } from 'react-icons/fa';
import Header from "../components/home/jsx/header";
import Navbar from "../components/home/jsx/navbar";
import Tibari from "../assets/Tibari.png";
import Whotrustuse from "../assets/Whotrustuse.png";
import "./Whotrustus.css"
import Footer from "../components/Footer";

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

                        <div className="founder-message">
                            <p className="founder-quote">
                                La cybersécurité est devenue une arme, une force et une priorité à avoir
                                dans différents types d'entreprises. Nous sommes convaincus par les solutions
                                que nous intégrons et nous sommes partenaires de 2 des 10 premiers fournisseurs
                                mondiaux du secteur de la cyberdéfense et cybersécurité au monde.
                            </p>
                        </div>
                    </div>

                    <div className="trust-container">
                        <h2 className="trust-title">
                            <FaHandshake className="trust-icon" /> QUI NOUS FAIT CONFIANCE
                        </h2>
                        <img src={Whotrustuse} alt="Whotrustuse" className="trust-partners-image" />
                    </div>
                </div>
            </div>
            <Footer style={{ marginTop: "200px" }} />
        </div>
    );
};

export default Whotrustus;