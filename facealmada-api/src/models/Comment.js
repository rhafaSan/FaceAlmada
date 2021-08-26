const { Model, DataTypes } = require("sequelize");

class Comment extends Model {
  static init(sequelize) {
    super.init({
      text: DataTypes.STRING,
      dateTime: DataTypes.DATE,
      post_id: DataTypes.INTEGER
    },{
        sequelize
    });
  }

  static associate(models){
    this.belongsTo(models.Post, { foreignKey: 'post_id', as: 'post'})
  }
}

module.exports = Comment;
