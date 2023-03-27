const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Patient extends Model{}

Patient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        postcode:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        },
        date_admitted:{
            type: DataTypes.DATE,
            allowNull: false
        },
        date_discharge:{
            type: DataTypes.DATE,
            allowNull: false
        },
        doctor_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'doctor',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'patient'
    }
);

module.exports = Patient;