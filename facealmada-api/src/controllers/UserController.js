const User = require("../models/User");

module.exports = {
  async post(req, res) {
    const { name, username, password } = req.body;
    const user = await User.create({ name, username, password });
    return res.status(200).json(user);
  },

  async getAll(req, res) {
    const user = await User.findAll();
    return res.json(user);
  },

  async login(req, res) {
    const { username, password } = req.body;
    const userValidate = await User.findOne({
      where: { username: username },
    });

    if (userValidate != null) {
      const user = await User.findOne({
        where: { password: password },
      });
      if (user != null) {
        return res.status(200).json(user);
      } else {
        return res.status(400).json({ error: "Login incorreto" });
      }
    } else {
      return res
        .status(404)
        .json({ error: "Não existe usuário vinculado a esse username" });
    }
  },
};
