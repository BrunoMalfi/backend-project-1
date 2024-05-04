'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
      {
      item_description: "my wonderfull item ",
      price: "11",
      item_number:"8433000123457",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item_description: "the best item",
      price: "15",
      item_number: "8401234567890",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item_description: "beautiful item",
      price: "20",
      item_number: "8412345678905",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item_description: "amazing item",
      price: "25",
      item_number: "8431234567896",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    
    
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
