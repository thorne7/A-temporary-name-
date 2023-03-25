const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bed extends Model{}

Bed.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        patient_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'patient',
            key: 'id',
          },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bed',
    }
);

module.exports = Bed;