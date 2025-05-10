import React from 'react';
import { Link } from 'react-router-dom';

const CyberAttacksPage = () => {
    return (
        <div className="page-container">
            <h1>Cyber Attacks</h1>
            <p>Information about various cyber attacks...</p>
            <Link to="/">Back to main menu</Link>
        </div>
    );
};

export default CyberAttacksPage;