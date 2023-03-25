const router = require('express').Router();
const calenderRoutes = require('./calenderRoutes');

router.use('/beds', calenderRoutes);

module.exports = router;