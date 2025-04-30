import React, { useState } from 'react';
import axios from 'axios';

import './SingUp.css';
import backgroundImage from '../../assets/background.jpg';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.username.trim()) newErrors.username = 'Le nom d’utilisateur est requis';

        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Email invalide';
        }

        if (!formData.password) {
            newErrors.password = 'Le mot de passe est requis';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Minimum 8 caractères';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
        }

        if (!formData.acceptTerms) {
            newErrors.acceptTerms = 'Vous devez accepter les conditions';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
        setIsSubmitting(true);
        setSuccessMessage('');

        try {
            const response = await axios.post('http://localhost:8081/api/auth/signup', {
                username: formData.username.trim(),
                email: formData.email.trim(),
                password: formData.password
            });

            setSuccessMessage('Inscription réussie ! Redirection en cours...');

            console.log('Réponse du serveur :', response.data);

            setTimeout(() => {
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    acceptTerms: false
                });
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors(error.response.data); 
            } else {
                console.error("Erreur d'inscription:", error);
            }
        } finally {
            setIsSubmitting(false);
        }
    }
};


    return (
        <div
            className="signup-container"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div className="signup-card">
                <h2 className="signup-title">Créer un compte</h2>

                {successMessage && (
                    <div className="success-message">{successMessage}</div>
                )}

                <form onSubmit={handleSubmit} className="signup-form" noValidate>
                    <div className="form-row">
                        <div className={`form-group ${errors.username ? 'has-error' : ''}`}>
                            <label htmlFor="username">Nom d’utilisateur</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Votre nom d’utilisateur"
                            />
                            {errors.username && <span className="error-message">{errors.username}</span>}
                        </div>

                        {/* L'autre champ est volontairement laissé vide si vous souhaitez le garder pour le design */}
                        <div className="form-group"></div>
                    </div>

                    <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="exemple@email.com"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Minimum 8 caractères"
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <div className={`form-group ${errors.confirmPassword ? 'has-error' : ''}`}>
                        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Retapez votre mot de passe"
                        />
                        {errors.confirmPassword && (
                            <span className="error-message">{errors.confirmPassword}</span>
                        )}
                    </div>

                    <div className={`form-group checkbox-group ${errors.acceptTerms ? 'has-error' : ''}`}>
                        <input
                            type="checkbox"
                            id="acceptTerms"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                        />
                        <label htmlFor="acceptTerms">
                            J'accepte les <a href="/conditions">conditions d'utilisation</a>
                        </label>
                        {errors.acceptTerms && (
                            <span className="error-message">{errors.acceptTerms}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="signup-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Inscription en cours...' : 'S\'inscrire'}
                    </button>
                </form>

                <div className="login-link">
                    Déjà un compte ? <a href="/login">Se connecter</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
