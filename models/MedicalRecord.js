const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MedicalRecord extends Model{}

MedicalRecord.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        condition:{
            type: DataTypes.STRING,
            allowNull: false
        },
        patient_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'patient',
            key: 'id'
          }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'medical_record'
    }
);

module.exports = MedicalRecord;