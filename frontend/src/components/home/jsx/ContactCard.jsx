import React from 'react';
import '../css/ContactCard.css';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const ContactCard= () => {
    return (
        <div className="contact-section">
            {/* Section Contact */}
            <div className="contact-info">
                <div className="contact-item">
                    <FiMapPin className="contact-icon" />
                    <span>Rue Dakar, IMM N°5, APP N°1, Rabat</span>
                </div>

                <div className="contact-item">
                    <FiMail className="contact-icon" />
                    <span>Contact@softwaretich.com</span>
                </div>

                <div className="contact-item">
                    <FiPhone className="contact-icon" />
                    <span>+212665-0707-75</span>
                </div>
            </div>

            {/* Section Liens */}
            <div className="links-section">
                <h3 className="links-title">Other</h3>
                <div className="contact-item">
                    <span> References </span>
                </div>
                <div className="contact-item">
                    <span> Partners </span>
                </div>
                <div className="contact-item">
                    <span> Media library</span>
                </div>
                <div className="contact-item">
                    <span> Contact </span>
                </div>
            </div>
        </div>
    );
};
export default ContactCard;