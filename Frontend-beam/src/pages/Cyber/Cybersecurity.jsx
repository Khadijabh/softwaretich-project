import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cybersecurity.css';

const Cybersecurity = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleOptionClick = (option) => {
        setShowDropdown(false);
        if (option === 'attacks') {
            navigate('/cyber-attacks');
        } else if (option === 'defense') {
            navigate('/cyber-defense');
        }
    };

    return (
        <div className="cybersecurity-menu">
            <div
                className="menu-title"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
            >
                Cybersecurity
                {showDropdown && (
                    <div className="dropdown-menu">
                        <div
                            className="dropdown-option"
                            onClick={() => handleOptionClick('attacks')}
                        >
                            Cyber Attacks
                        </div>
                        <div
                            className="dropdown-option"
                            onClick={() => handleOptionClick('defense')}
                        >
                            Cyber Defense
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cybersecurity;