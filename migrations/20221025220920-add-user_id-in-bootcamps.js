'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('bootcamps', 'user_id',
            {
              type: Sequelize.INTEGER,
              references: {
                model: 'users',
                key: 'id',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
              defaultValue: null,
            })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'region_id')
  }
};
