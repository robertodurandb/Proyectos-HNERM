'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reagent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reagent.belongsTo(models.Area, {foreignKey: 'areaId', as: 'area'})
    }
  }
  Reagent.init({
    name: DataTypes.STRING,
    codeSap: DataTypes.INTEGER,
    codeEssi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reagent',
  });
  return Reagent;
};