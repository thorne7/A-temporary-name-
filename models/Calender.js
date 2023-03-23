const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Calender extends Model{}

Calender.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        bed_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'bed',
              key: 'id',
            },
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
        modelName: 'calender',
    }
);

module.exports = Calender;