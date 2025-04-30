import React, { useState } from 'react';
import './Cybersecurity.css'; // Nous créerons ce fichier CSS ensuite

const Cybersecurity = () => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

};

export default Cybersecurity;