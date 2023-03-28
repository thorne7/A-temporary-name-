const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const calender = require('./calenderRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/beds', calender);

module.exports = router;