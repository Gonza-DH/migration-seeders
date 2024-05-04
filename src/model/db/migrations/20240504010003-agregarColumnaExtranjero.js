'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Users',
      'extranjero',
      {
        type: Sequelize.DataTypes.TINYINT(1),
      }
    );
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Users', 'extranjero')
  }
};
