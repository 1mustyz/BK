'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reservationId: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:'Users',
          key:'id',
          as:'userId'
        },
      },
      trId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:'Contents',
          key:'id',
          as:'trId'
        },
      },
      seatNo: {
        type: Sequelize.INTEGER
      },
      paymentCode: {
       type: Sequelize.STRING
      },
      paidReservation: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reservations');
  }
};