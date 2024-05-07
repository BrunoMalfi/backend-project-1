'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.Category,{
        through:models.CategoryProduct,
      }),
      Product.belongsToMany(models.Order,{through:models.OrderProduct})
      Product.hasMany(models.Review)
    }
  }
  Product.init({
    item_description:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Item description field is mandatory",
        },
        notEmpty:{
          msg: "Please fulfil the Item description field, it can't be empty",
        }
      },
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Price field is mandatory",
        },
        isNumeric:{
          msg: "Price must be a numeric value"
        },
        notEmpty:{
          msg: "Please fulfil the price field, it can't be empty",
        }
      },
    },
    item_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Item description field is mandatory",
        },
        notEmpty:{
          msg: "Please fulfil the Item description field, it can't be empty",
        }
      },
    },
    image_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};