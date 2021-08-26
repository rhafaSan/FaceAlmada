const Comment = require("../models/Comment");

module.exports = {
  async post(req, res) {
    const { text, dateTime, postId } = req.body;
    const comment = await Comment.create({ text, dateTime, postId });
    return res.json(comment);
  },

  async getAll(req, res) {
    const comment = await Comment.findAll();
    return res.json(comment);
  },

};