const sequelize = require('../config/connection');
const { Doctor, MedicalRecord,Patient,Staff,User,Bed } = require('../models');

const doctordata = require('./doctorData.json');
const medicalRecordData = require('./medicalRecordData.json');
const patientData = require('./patientData.json');
const staffData = require('./staffData.json');
const userData = require('./userData.json');
const bedData = require('./bedData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  const doctor = await Doctor.bulkCreate(doctordata, {
    individualHooks: true,
    returning: true,
  });
  const medicalrecord = await MedicalRecord.bulkCreate(medicalRecordData, {
    individualHooks: true,
    returning: true,
  });
  const patient = await Patient.bulkCreate(patientData, {
    individualHooks: true,
    returning: true,
  });
  const staff = await Staff.bulkCreate(staffData, {
    individualHooks: true,
    returning: true,
  });

  const bed = await Bed.bulkCreate(bedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
