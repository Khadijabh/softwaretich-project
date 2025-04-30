import React from 'react';
import './partners.css';
import NavBar from '../components/home/jsx/navbar';
import Header from '../components/home/jsx/header';
import backgroundImage from "../assets/background.jpg";
import Sophos from "../assets/part/Sophos-Logo.png";
import Fortinet from '../assets/part/Fortinet-Logo.svg';
import crowdstrike from '../assets/part/crowdstrike-logo.png'
import TrendMicro from '../assets/part/TrendMicro-Logo.png'
import Footer from "../components/Footer";
import ContactCard from "../components/home/jsx/ContactCard";
import { Link } from 'react-router-dom';

const Partners = () => {
    const partners = [
        { name: 'Sophos', logo: Sophos },
        { name: 'Fortinet', logo: Fortinet },
        { name: 'CrowdStrike', logo: crowdstrike },
        { name: 'TrendMicro', logo: TrendMicro }
    ];

    return (
        <div>
            <Header />
            <NavBar />
            <section
                className="hero-section"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="breadcrumb">
                    <Link to="/">Accueil</Link>  <span> / </span> <span>Partners</span>
                </div>
            </section>
        <div className="partners-page">
            {/* Breadcrumb */}


            {/* Page Header */}
            <div className="page-header">
                <h1>Our Partners</h1>
            </div>

            {/* Partners Grid */}
            <div className="partners-grid">
                {partners.map((partner, index) => (
                    <div key={index} className="partner-card">
                        <div className="partner-logo">
                            {/* Remplacez par vos vraies images ou utilisez un composant Image */}
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/logos/default.png'
                                }}
                            />
                        </div>
                        <div className="partner-name">{partner.name}</div>

                    </div>
                ))}
            </div>
        </div>

            <div>
                <Footer />

            </div>

        </div>
    );
};

export default Partners;