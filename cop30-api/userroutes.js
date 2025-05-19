// routes/userRoutes.js
const express = require('express');
const User = require('./user'); // Atualize o caminho se necessário
const sequelize = require('./database'); // Certifique-se de que o caminho está correto

const router = express.Router();

// GET: Listar todos os usuários
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// POST: Criar um novo usuário
router.post('/', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const newUser = await User.create({ nome, email, senha });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT: Atualizar um usuário existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  try {
    await User.update({ nome, email, senha }, { where: { id } });
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE: Remover um usuário
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
