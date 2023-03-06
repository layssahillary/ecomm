'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      cardName: {
        type: Sequelize.STRING,
        field: 'card_name',
        allowNull: false,
      },
      cardNumber: {
        type: Sequelize.STRING,
        field: 'card_number',
        allowNull: false,
      },
      expirationDate: {
        type: Sequelize.STRING,
        field: 'expiration_date',
        allowNull: false,
      },
      cvv: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue:'CRIADO',
        allowNull: false
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Payments');
  },
};