const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg'); // Client PostgreSQL

const router = express.Router();

// Configuration de la connexion PostgreSQL
const pool = new Pool({
    user: 'ton_utilisateur_pg', // Remplace par ton utilisateur PostgreSQL
    host: 'localhost',
    database: 'authh_db',
    password: 'Belama2002',
    port: 5432,
});

// Route d'authentification
router.post('/api/auth/signin', async (req, res) => {
    const { email, password } = req.body;

    // Vérification de la présence des champs
    if (!email || !password) {
        return res.status(400).json({ message: "L'email et le mot de passe sont requis" });
    }

    try {
        // Requête SQL pour récupérer l'utilisateur par email
        const query = 'SELECT * FROM users WHERE email = $1';
        const result = await pool.query(query, [email]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        const user = result.rows[0];

        // Comparaison du mot de passe
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Mot de passe incorrect" });
        }

        // Génération du token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, 'ton_secret', { expiresIn: '1h' });

        // Envoi de la réponse avec le token
        res.status(200).json({
            message: 'Connexion réussie',
            token,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Une erreur est survenue' });
    }
});

module.exports = router;