import React from 'react';
import './partners.css';
import NavBar from '../components/home/jsx/navbar';
import Header from '../components/home/jsx/header';
import Footer from "../components/Footer";

import at from "../assets/WHO/at.png";
import C9 from "../assets/WHO/C9.png";
import C10 from "../assets/WHO/C10.png";
import C11 from "../assets/WHO/C11.png";
import soo from "../assets/WHO/soo.png";
import fort from "../assets/WHO/fort.png";
import fire from "../assets/WHO/fire.png";
import ext2 from "../assets/WHO/ext2.png";
import Sophos from "../assets/part/Sophos-Logo.png";
import Fortinet from "../assets/part/Fortinet-Logo.svg";
import crowdstrike from "../assets/part/crowdstrike-logo.png";
import TrendMicro from "../assets/part/TrendMicro-Logo.png";

const Partners = () => {
    const partners = [
        { name: 'Sophos', logo: Sophos },
        { name: 'Fortinet', logo: Fortinet },
        { name: 'CrowdStrike', logo: crowdstrike },
        { name: 'TrendMicro', logo: TrendMicro }
    ];

    const referenceItems = [
        {
            logo: soo,
            description: "BEAMTEL intégrateur de solutions Cyber Sécurité de SOPHOS"
        },
        {
            logo: ext2,
            description: "BEAMTEL partenaire officiel"
        },
        {
            logo: C9,
            description: "Contrat 2 ans : 6 Consultants en Transformation Staire",
            client: "Ministère de la Santé au Maroc"
        },
        {
            logo: C10,
            description: "Contrat Cadre : Consultants en Ingénierie / Conseils / M.B.D. Labs"
        },
        {
            logo: C11,
            description: "Partenariat et Sponsor (RAMOND)"
        },
        {
            logo: at,
            description: "Accueillir des élèves Ingénieurs pour des Projets PFE de 6 Mois"
        },
        {
            logo: fire,
            description: "5G Private Networks"
        },
        {
            logo: fort,
            description: "Revendeur, Intégrateur & Partenaire Autorisé"
        }
    ];

    return (
        <div className="Partners-page">
            <Header />
            <NavBar />

            <div className="Partners-container">
                <h2 className="section-title">Our Partners</h2>


                <div className="partners-grid">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-card">
                            <div className="partner-logo">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/logos/default.png';
                                    }}
                                />
                            </div>
                            <div className="partner-name">{partner.name}</div>
                        </div>
                    ))}
                </div>

                <h1>BEAMTEL'S References</h1>
                <div className="Partners-grid1">
                    {referenceItems.map((ref, index) => (
                        <div key={index} className="reference-card">
                            <div className="reference-logo">
                                <img
                                    src={ref.logo}
                                    alt={`Reference ${index + 1}`}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/logos/default.png';
                                    }}
                                />
                            </div>
                            <div className="reference-content">
                                <p>{ref.description}</p>
                                {ref.client && <p className="client"><strong>Client :</strong> {ref.client}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Partners;
