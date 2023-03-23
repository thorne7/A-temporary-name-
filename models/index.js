const User = require('./User');
const Doctor = require('./Doctor');
const Staff = require('./Staff');
const Patient = require('./Patient');
const MedicalRecord = require('./MedicalRecord');
const Bed = require('./Bed');
const Calender = require('./Calender');

//Links user table to doctor table.
User.hasMany(Doctor, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//Links doctor table to user table.
Doctor.belongsTo(User, {
    foreignKey: 'user_id',
});

//Links user table to staff table.
User.hasMany(Staff, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//Links staff table to user table.
Staff.belongsTo(User, {
    foreignKey: 'user_id',
});

//Links user table to patient table.
User.hasMany(Patient, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//Links patient table to user table.
Patient.belongsTo(User, {
    foreignKey: 'user_id',
});

Patient.hasMany(Doctor, {
    
});




module.exports = {User, Doctor, Staff, Patient, MedicalRecord, Bed, Calender};