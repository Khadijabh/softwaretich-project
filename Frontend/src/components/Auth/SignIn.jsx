import { useState } from 'react';
import { TextField } from '@mui/material';
import AuthForm from './AuthForm';
import { signIn } from '../../services/authService';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(formData);
      // Redirection ou gestion du succès
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <AuthForm title="Connexion" onSubmit={handleSubmit} submitText="Se connecter">
      <TextField
        name="email"
        label="Email"
        type="email"
        required
        fullWidth
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        name="password"
        label="Mot de passe"
        type="password"
        required
        fullWidth
        value={formData.password}
        onChange={handleChange}
      />
    </AuthForm>
  );
};

export default SignIn;