// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}
ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },

    product_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'product',
        key:'id'
        }
    },

    tag_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'tag',
        key:'id'
        }
    }

   
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = Product;
