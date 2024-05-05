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
    }
  }
  Product.init({
    item_description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    item_number: DataTypes.STRING,
    image_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};