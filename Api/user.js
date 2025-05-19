// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('./database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hash = bcrypt.hashSync(value, 10);
      this.setDataValue('senha', hash);
    }
  },
});

// Método para autenticação
User.authenticate = async (email, senha) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return null;
  
  const isValid = bcrypt.compareSync(senha, user.senha);
  if (!isValid) return null;
  
  const token = jwt.sign({ id: user.id }, 'seu_segredo_secreto', { expiresIn: '1h' });
  return token;
};

module.exports = User;