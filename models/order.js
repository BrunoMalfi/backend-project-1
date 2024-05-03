'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.Product,{through:models.OrderProduct}),
      Order.belongsTo(models.User);
    }
  }
  Order.init({
    UserId: DataTypes.INTEGER,
    orderStatus: DataTypes.STRING,
    dlvDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};