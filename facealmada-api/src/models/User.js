const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },{
        sequelize
    });
  }
}

module.exports = User;
