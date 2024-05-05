'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order)
      User.hasMany(models.Review)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name field is mandatory",
        },
        notEmpty:{
          msg: "Please fulfil the name field, it can't be empty",
        }
      },
    },
    eMail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please fulfil the e-mail field",
        },
        isEmail: {
          msg: "Please fullfil the e-mail field with a valid e-mail direction",
        },
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password field is mandatory",
        },
        notEmpty:{
          msg: "Please fulfil the name field, it can't be empty",
        }
      },
    },
    role: {type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};