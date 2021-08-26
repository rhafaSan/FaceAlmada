const Post = require("../models/Post");

module.exports = {
  async post(req, res) {
    const { text, dateTime, userId } = req.body;
    const post = await Post.create({ text, dateTime, userId });
    return res.json(post);
  },

  async getAll(req, res) {
    const post = await Post.findAll();
    return res.json(post);
  },

};