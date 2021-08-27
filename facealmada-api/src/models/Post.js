const { Model, DataTypes } = require("sequelize");

class Post extends Model {
  static init(sequelize) {
    super.init({
      text: DataTypes.STRING,
      date_post: DataTypes.DATE,
      user_id: DataTypes.INTEGER
    },{
        sequelize
    });
  }

  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})
    this.hasMany(models.Comment, { foreignKey: 'post_id', as: 'comments'})
  }
}

module.exports = Post;
