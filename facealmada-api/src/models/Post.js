const { Model, DataTypes } = require("sequelize");

class Post extends Model {
  static init(sequelize) {
    super.init({
      text: DataTypes.STRING,
      dateTime: DataTypes.DATE,
      userId: DataTypes.INTEGER
    },{
        sequelize
    });
  }
}

module.exports = Post;
