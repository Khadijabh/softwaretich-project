import React from 'react';
import './HomePage.css';
import logo from '../assets/logo.jpg';
import backgroundImage from '../assets/background.jpg';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Overlaid Header */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-overlay">
          <header className="hero-header"> {/* New header inside hero */}
            <div className="logo">
              <img src={logo} alt="SOFTWERTICH" className="logo-img" />
            </div>
            <nav className="nav">
              <ul>
                <li><a href="#references">References</a></li>
                <li><a href="#partners">Partners</a></li>
                <li><a href="#media">Media library</a></li>
                <li><a href="#career">Career</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="hero-content">
          <h1>About us</h1>
          <p>
            We are a company specializing in cybersecurity, protecting critical infrastructures
            and strategic sectors such as transportation, telecommunications, and governments.
            With our in-depth expertise, we develop robust strategies to secure 5G networks and
            provide advanced protection against emerging threats.
          </p>
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
          <button className="explore-btn">Explore Solutions</button>
          <div className="divider"></div>
        </section>

        {/* Numbers Section */}
        <section className="numbers-section">
          <h2>SOFTWERTICH in Numbers</h2>
          <p>
            SOFTWERTICH is a company specialized in cybersecurity. A true key player in
            the global market, SOFTWERTICH holds a strategic position in the
            cybersecurity ecosystem, thanks to a pool of advanced skills and unique
            expertise.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">+ 200</div>
              <div className="stat-label">Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">+ 1000</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">+ 100</div>
              <div className="stat-label">Certifications of security</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">+ 25</div>
              <div className="stat-label">Pays</div>
            </div>
          </div>
          <div className="divider"></div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-item checked">
            <span className="checkmark">✓</span>
            <span>Rue Dakar, IMM N°5, APP N°1, Rabat</span>
          </div>
          <div className="contact-item">
            <span className="checkmark">✉</span>
            <span>Tibari@softwaretich.com</span>
          </div>
          <div className="contact-item">
            <span className="checkmark">☎</span>
            <span>+212665-0707-75</span>
          </div>
          <div className="divider"></div>
        </section>

        {/* Other Links Section */}
        <section className="other-links">
          <h3>Other</h3>
          <ul>
            <li><a href="#references">References</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#media">Media library</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#privacy">Private Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="copyright">
          © 2025 SOFTWERTICH. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;