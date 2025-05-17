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
import kas1 from "../assets/WHO/kas1.png";
import TrendMicro from "../assets/part/TrendMicro-Logo.png";

import berger from "../assets/WHO/C9.png";
import alten from "../assets/WHO/C10.png";
import aws from "../assets/WHO/aws.png";
import nucelus from "../assets/WHO/nucelus.png";
import bosch from "../assets/WHO/bosch.png";
import nokia from "../assets/WHO/C11.png";
import hpe from "../assets/WHO/hpe.png";
import assa from "../assets/WHO/assa.png";
import engenius from "../assets/WHO/engenius.jpg";
import lightera from "../assets/WHO/lightera.jpg";
import cisco from "../assets/WHO/cisco.png";
import fortinet from "../assets/WHO/fort.png";
import sophos from "../assets/WHO/soo.png";
import juniper from "../assets/WHO/juniper.png";
import extreme from "../assets/WHO/ext2.png";


const Partners = () => {
    const references = [
        {
            logo: berger,
            description: "Contrat 2 ans : 6 Consultants en Transformation digitale\nClient : Ministère de la Santé au Maroc"
        },
        {
            logo: alten,
            description: "Contrat Cadre : Consultants en Ingénierie / Conseils / R&D labs"
        },
        {
            logo: aws,
            description: "Programme Startup Innovation en Afrique\nID : 10829622"
        },
        {
            logo: nucelus,
            description: "BEAMTEL Intégrateur de solutions Cyber Sécurité de Nucleon"
        },
        {
            logo: bosch,
            description: "BEAMTEL collabore avec ce fournisseur en GPON LAN"
        },
        {
            logo: nokia,
            description: "Partenaire et Sponsor DIAMOND"
        },
        {
            logo: hpe,
            description: "Accueilli les élèves ingénieurs pour des Projets PFE de 6 Mois"
        },
        {
            logo: assa,
            description: "Accès control systems"
        },
        {
            logo: engenius,
            description: "BEAMTEL Intégrateur de solutions de connectivité notamment Wifi"
        },
        {
            logo: lightera,
            description: "BEAMTEL collabore avec ce fournisseur en GPON LAN"
        },
        {
            logo: cisco,
            description: "BEAMTEL est partenaire officiel et Intégrateur de solutions de Cisco"
        },
        {
            logo: fortinet,
            description: "Reseller, Integrator & Authorized Partner"
        },
        {
            logo: sophos,
            description: "BEAMTEL Intégrateur de solutions Cyber Sécurité de SOPHOS"
        },
        {
            logo: juniper,
            description: "Routing & Switching Provider Partnership"
        },
        {
            logo: extreme,
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

        },

        {
            logo: kas1,
            description: " BEAMTEL Intégrateur de solutions Cyber Sécurité de Kaspersky"
        },


        {
            logo: C10,
            description: "Contrat Cadre : Consultants en Ingénierie / Conseils / M.B.D. Labs"
        },
        {
            logo: C11,
            description: "Nous sommes Intégrateur de solutions de connectivités Nokia"
        },
        {
            logo: at,
            description: "Nous sommes Intégrateur de la 5G privée de Athonet"
        },
        {
            logo: fire,
            description: "Nous sommes Intégrateur des solutions 5G de Firecell"
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
                <h2 className="section-title">BEAMTEL'S PARTNERS</h2>
                <div className="Partners-grid1">
                    {references.map((ref, index) => (
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
                                {ref.description.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
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
