const Sequelize = require('sequelize');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const dbConfig = require('./db_config');

const connection = new Sequelize(dbConfig);

User.init(connection);
Post.init(connection);
Comment.init(connection);

Post.associate(connection.models)
Comment.associate(connection.models)

module.exports = connection;