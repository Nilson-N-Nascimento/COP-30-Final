// routes/userRoutes.js
const express = require('express');
const User = require('./user');
const router = express.Router();

// Rota de login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  
  try {
    const token = await User.authenticate(email, senha);
    if (!token) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ... (mantenha as outras rotas que você já tem)

module.exports = router;