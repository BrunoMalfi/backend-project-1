'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Products',
      'image_path',
     {type : Sequelize.STRING}
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Products',
      'image_path'
    );
  }
};
