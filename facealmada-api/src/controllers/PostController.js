const Post = require("../models/Post");

module.exports = {
  async post(req, res) {
    const { text, user_id } = req.body;
    const date_post = new Date();
    const post = await Post.create({ text, date_post, user_id });
    return res.json(post);
  },

  async getAll(req, res) {
    const post = await Post.findAll({include: {association: 'comments'}});
    return res.json(post);
  },

  async getById(req, res) {
    const { id } = req.params

    const post = await Post.findByPk(id, {include: {association: 'comments'}});
    return res.json(post);
  },

};