const User = require("../models/User");

module.exports = {
  async post(req, res) {
    const { name, username, password } = req.body;
    const user = await User.create({name, username, password});
    return res.json(user);
  },

  async getAll(req, res) {
    const user = await User.findAll();
    return res.json(user);
  },

};
