import React from 'react';
import { Link } from 'react-router-dom';

const CyberDefensePage = () => {
    return (
        <div className="page-container">
            <h1>Cyber Defense</h1>
            <p>Information about cyber defense strategies...</p>
            <Link to="/">Back to main menu</Link>
        </div>
    );
};

export default CyberDefensePage;