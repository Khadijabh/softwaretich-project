import React, { useState } from 'react';
import "./SingIn.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../../assets/background.jpg';

const SignIn = () => {
  const navigate = useNavigate(); // pour rediriger après connexion
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation simple
    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    try {
      // Envoi de la requête de connexion au backend
      const response = await axios.post('https://localhost:8081/api/auth/signin', {
        email: email,
        password: password
      });

      // Récupération du token et stockage dans le localStorage
      const token = response.data.token; // ou accessToken selon ton backend
      localStorage.setItem('token', token); // tu peux adapter à sessionStorage si besoin

      console.log('Connexion réussie ✅');
      navigate('/');

      // Remplace par la route vers ton dashboard ou page suivante

    } catch (err) {
      console.error('Erreur lors de la connexion ', err.response?.data || err.message);
      setError("Une erreur est survenue. Veuillez vérifier vos identifiants.");
    }
  };

  return (
      <div
          className="signin-container"
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
        <div className="signin-card">
          <h2 className="signin-title">Connexion</h2>

          {/* Affichage de l'erreur s'il y en a une */}
          {error && <div className="error-message">{error}</div>}

          {/* Formulaire de connexion */}
          <form onSubmit={handleSubmit} className="signin-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrez votre email"
                  autoComplete="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez votre mot de passe"
                  autoComplete="current-password"
              />
            </div>

            <div className="remember-forgot">
              <label className="remember-me">
                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                Se souvenir de moi
              </label>

              <a href="/forgot-password" className="forgot-password">
                Mot de passe oublié ?
              </a>
            </div>

            <button type="submit" className="signin-button">
              Se connecter
            </button>
          </form>

          <div className="signup-link">
            Pas encore de compte ? <Link to="/SignUp"> S'inscrire </Link>
          </div>

          <div className="social-login">
            <p>Ou connectez-vous avec :</p>
            <div className="social-icons">
              <button className="social-button google">
                <i className="fab fa-google"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SignIn;
