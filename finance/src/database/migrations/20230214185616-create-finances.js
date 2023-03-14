'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('payments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      nomeCartao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numeroCartao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataExpiracao: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      cvv: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "CRIADO",
      }
    });
  },
  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('payments');
  }
};