'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Swap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Swap.init(
      {
          metadata: DataTypes.TEXT,
          accept_address: DataTypes.STRING,
          init_address: DataTypes.STRING,
          accept_sign: DataTypes.STRING,
          init_sign: DataTypes.STRING,
          status: DataTypes.INTEGER,
          tx: DataTypes.STRING,
          notes: DataTypes.STRING
      },
      {
          sequelize,
          modelName: "Swap"
      }
  )
  return Swap;
};