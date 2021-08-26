const Sequelize = require('sequelize');
const User = require('../models/User');
const dbConfig = require('./db_config');

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;