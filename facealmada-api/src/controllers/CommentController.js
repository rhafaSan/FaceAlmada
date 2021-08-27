const Comment = require("../models/Comment");

module.exports = {
  async post(req, res) {
    const { text, post_id } = req.body;
    const date_comment = new Date();
    const comment = await Comment.create({ text, date_comment, post_id });
    return res.json(comment);
  },

  async getAll(req, res) {
    const comment = await Comment.findAll();
    return res.json(comment);
  },

};