import React from 'react';
import './HomePage.css';
import backgroundImage from '../assets/background.jpg';
import Image from '../assets/image.png';
import Image2F from '../assets/image2F.png';
import Image3F from '../assets/image3F.png';
import Navbar from '../components/home/jsx/navbar';
import Header from "../components/home/jsx/header";
import ContactCard from "../components/home/jsx/ContactCard";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (

    <div className="home-container">

      <Header />
      <Navbar />

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      </section>

      {/* Why Choose SOFTAMERTICH Section */}
      <section className="why-choose-section">
        <div className="hero-content">
          <h1>About us</h1>
          <p>
            We are a company specializing in cybersecurity, protecting critical infrastructures
            and strategic sectors such as transportation, telecommunications, and governments.
            With our in-depth expertise, we develop robust strategies to secure 5G networks and
            provide advanced protection against emerging threats.
          </p>
          <h2>Why Choose BEAMTEL ?</h2>
          <p>
            BEAMTEL is your trusted cybersecurity partner, protecting critical infrastructures
            and strategic sectors. We anticipate threats and secure networks, including 5G, using
            advanced technologies. Choose expertise to safeguard your digital future.
          </p>
        </div>


        <div className="stats-grid">
          <div className="stat-item transform-hover">
            <img src={Image} alt="Full Supervision"/>
            <h3>Full supervision</h3>
          </div>
          <div className="stat-item transform-hover">
            <img src={Image2F} alt="Full Supervision"/>
            <h3>Investigation</h3>
          </div>
          <div className="stat-item transform-hover">
            <img src={Image3F} alt="Full Supervision"/>
            <h3>Fraud prevention</h3>
          </div>
        </div>
      </section>

      <main className="main-content">
        {/* Secure Your Digital World Section */}
        <section className="secure-section">
          <h2>Secure Your Digital World</h2>
          <p className="subtitle">
            Enterprise-grade cybersecurity solutions to protect your business from evolving
            digital threats
          </p>
            <Link to="/Products"> <button className="explore-btn">Explore Solutions</button></Link>
          <div className="divider"></div>
        </section>

        {/* Numbers Section */}
        <StatsSection />

        {/* Contact Section */}
        <section className="contact-section">
         <ContactCard/>
          <div className="divider"></div>
        </section>

        {/* Other Links Section */}
        <section className="other-links">

        </section>
      </main>

      {/* Footer */}
      <Footer style={{ marginTop: -320}} />
    </div>
  );
};

export default HomePage;