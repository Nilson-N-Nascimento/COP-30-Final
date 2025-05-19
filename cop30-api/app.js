// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const userRoutes = require('./userroutes'); // Importa as rotas de usuário

const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoutes); // Adiciona as rotas de usuário

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });


  