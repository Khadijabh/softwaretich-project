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
                    <span>10 rue ghandi, Rabat</span>
                </div>

                <div className="contact-item">
                    <FiMail className="contact-icon" />
                    <span> Contact@beamtel.com<br />
                     sales@beamtel.ma </span>
                </div>

                <div className="contact-item">
                    <FiPhone className="contact-icon" />
                    <span>+212665-0707-75</span>
                </div>
            </div>

        </div>
    );
};
export default ContactCard;