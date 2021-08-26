const { Model, DataTypes } = require("sequelize");

class Post extends Model {
  static init(sequelize) {
    super.init({
      text: DataTypes.STRING,
      dateTime: DataTypes.DATE,
      user_id: DataTypes.INTEGER
    },{
        sequelize
    });
  }

  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})
  }
}

module.exports = Post;
