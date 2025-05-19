const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./database');
const userRoutes = require('./userroutes'); // Certifique-se que o arquivo está EXATAMENTE com este nome

const app = express();

// 1. Verificação EXTRA do CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// 2. Middlewares com tratamento de erro
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 3. Rota com verificação de existência
if (userRoutes) {
  app.use('/api/users', userRoutes);
} else {
  console.error('Erro: userRoutes não encontrado! Verifique o nome do arquivo e exportação.');
}

// 4. Rota de saúde com log
app.get('/api/health', (req, res) => {
  console.log('Verificação de saúde executada');
  res.status(200).json({ status: 'online', timestamp: new Date() });
});

// 5. Inicialização com mais logs
const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log('✅ Banco de dados sincronizado');
    app.listen(PORT, () => {
      console.log(`\n=== SERVIDOR RODANDO ===`);
      console.log(`Porta: ${PORT}`);
      console.log(`Frontend: http://localhost:5173`);
      console.log(`API Users: http://localhost:${PORT}/api/users`);
      console.log(`Health Check: http://localhost:${PORT}/api/health\n`);
    });
  })
  .catch((err) => {
    console.error('❌ Erro no banco de dados:', err);
  });