const router = require('express').Router();
const { Doctor, MedicalRecord, Patient, Staff, User, Bed } = require('../models');
const userAuth = require('../utils/auth');

router.get('/', userAuth, async (req, res) => {

    try{


    }catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

    //Renders login page.
    res.render('login');
  });

module.exports = router;