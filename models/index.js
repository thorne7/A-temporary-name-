const User = require('./User');
const Doctor = require('./Doctor');
const Staff = require('./Staff');
const Patient = require('./Patient');
const MedicalRecord = require('./MedicalRecord');
const Bed = require('./Bed');
const Calender = require('./Calender');

// //Links user table to doctor table.
// User.hasOne(Doctor, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// //Links doctor table to user table.
// Doctor.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// //Links user table to staff table.
// User.hasOne(Staff, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// //Links staff table to user table.
// Staff.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// //Links the patient table to doctor.
// Doctor.hasMany(Patient, {
//     foreignKey: 'doctor_id',
// });

// //Links the doctor table to patient.
// Patient.belongsToMany (Doctor, {
//     foreignKey: 'doctor_id',
// });

// //Links the patient table to medical record table.
// Patient.hasMany(MedicalRecord, {
//     foreignKey: 'patient_id',
// });

// //Links the medical record table to patient.
// MedicalRecord.belongsToMany (Patient, {
//     foreignKey: 'patient_id',
// });

// //Links the patient table to bed table.
// Patient.hasOne(Bed, {
//     foreignKey: 'patient_id',
// });

// //Links the bed table to patient.
// Bed.belongsToMany (Patient, {
//     foreignKey: 'patient_id',
// });

// //Links the bed table to Calender.
// Bed.hasOne(Calender, {
//     foreignKey: 'bed_id',
// });

// //Links the calender table to bed.
// Calender.belongsTo(Bed, {
//     foreignKey: 'bed_id',
// });

// Calender.hasMany(MedicalRecord, {
//     through: {
//         model: Patient,
//         unique: false
//       },
//       as: 'conditions',
//       foreignKey: 'patient_id'
// });

// MedicalRecord.belongsToMany(Calender, {
//     through: {
//         model: Patient,
//         unique: false
//       },
//       as: 'conditions',
//       foreignKey: 'patient_id'
// });

module.exports = {User, Doctor, Staff, Patient, MedicalRecord, Bed, Calender};