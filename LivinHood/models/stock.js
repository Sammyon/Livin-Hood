'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //! MASUKKAN BELONGS TO 3 KALI??
      Stock.belongsTo(models.Portofolio, {foreignKey: "StockId"})
      Stock.belongsTo(models.Company, {foreignKey: "StockId"})
    }
  }
  Stock.init({
    stockCode: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'stockCode cannot be empty!'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          msg: 'description cannot be empty!'
        }
      }
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'CompanyId cannot be empty!'
        }
      }
    },
    PortfolioId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'PortfolioId cannot be empty!'
        }
      }
    },
  }, {
    hooks: {
      
    },
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};