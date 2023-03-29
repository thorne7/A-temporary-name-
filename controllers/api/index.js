const router = require('express').Router();
const userRoutes = require('./userRoutes');
const patientRoutes = require('./patientRoutes');
const medicalRoutes = require('./medicalRoutes');

router.use('/records', medicalRoutes);
router.use('/users', userRoutes);
router.use('/beds', patientRoutes);


module.exports = router;