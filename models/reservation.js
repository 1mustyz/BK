'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

Reservation.associate = models => {
  Reservation.belongsTo(models.Content, {
    foreignKey: 'trId'
  });
  Reservation.belongsTo(models.User, {
      foreignKey: 'userId'
    });

  }

Reservation.init({
    reservationId: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    trId: DataTypes.INTEGER,
    seatNo: DataTypes.INTEGER,
    paymentCode: DataTypes.STRING,
    paidReservation: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};