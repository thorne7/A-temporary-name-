const router = require('express').Router();
const userRoutes = require('./userRoutes');
const calenderRoutes = require('./calenderRoutes');

router.use('/users', userRoutes);
router.use('/beds', calenderRoutes)

module.exports = router;