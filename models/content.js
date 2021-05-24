'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Content.associate = models => {
    
    Content.hasMany(models.Reservation);

  }

  Content.init({
    destination: DataTypes.STRING,
    noOfSeat: DataTypes.INTEGER,
    dayOfTakeOff: DataTypes.STRING,
    timeOfTakeOff: DataTypes.STRING,
    price: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};