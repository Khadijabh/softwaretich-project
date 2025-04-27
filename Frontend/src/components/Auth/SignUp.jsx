import { useState } from 'react';
import { TextField } from '@mui/material';
import AuthForm from './AuthForm';
import { signUp } from '../../services/authService';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    try {
      await signUp(formData);
      // Redirection ou gestion du succès
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <AuthForm title="Inscription" onSubmit={handleSubmit} submitText="S'inscrire">
      <TextField
        name="name"
        label="Nom complet"
        required
        fullWidth
        value={formData.name}
        onChange={handleChange}
      />
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
      <TextField
        name="confirmPassword"
        label="Confirmer le mot de passe"
        type="password"
        required
        fullWidth
        value={formData.confirmPassword}
        onChange={handleChange}
      />
    </AuthForm>
  );
};

export default SignUp;