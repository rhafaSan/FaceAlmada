const { Model, DataTypes } = require("sequelize");

class Comment extends Model {
  static init(sequelize) {
    super.init({
      text: DataTypes.STRING,
      dateTime: DataTypes.DATE,
      postId: DataTypes.INTEGER
    },{
        sequelize
    });
  }
}

module.exports = Comment;
