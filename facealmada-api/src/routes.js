const express = require('express');
const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const CommentController = require('./controllers/CommentController');

const routes = express.Router();

routes.post("/users/", UserController.post);
routes.post("/login/", UserController.login);


routes.post("/posts/", PostController.post);
routes.get("/posts/", PostController.getAll);
routes.get("/posts/:id", PostController.getById);


routes.post("/comments/", CommentController.post);
routes.get("/comments/", CommentController.getAll);

module.exports = routes;