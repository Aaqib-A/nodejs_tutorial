'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here

      
      /*
      Change it in 3 positions
      1. Here
      2. In User's Model
      3. In Post Migrations

      3.1 Run migrateion
      */

      //this.belongsTo(User) //Default foreign key will be User + id === UserId
      this.belongsTo(User, {foreignKey:'userId', as:'user'}) // To override the default behaviour
    }
    toJSON(){
      return{...this.get(), id: undefined, userId: undefined}
    }
  }
  Post.init({
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'posts',
    modelName: 'Post',
  });
  return Post;
};