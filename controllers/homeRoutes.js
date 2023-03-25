const role = require('../../utils/constants');
const router = require('express').Router();
const { Doctor, MedicalRecord, Patient, Staff, User, Bed } = require('../models');
const userAuth = require('../utils/auth');

router.get('/', userAuth, async (req, res) => {

    try{

        //console.log(req.session.role);


        //Renders home page.
        res.render('homepage');

    } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

    try{

        // If the user is already logged in, redirect the request to home route.
        if (req.session.logged_in) {
            res.render('homepage', req.session.role);
            return;
        }

        //Renders login page.
        res.render('login');

    } catch (err) {
        res.status(500).json(err);
    }
  });

module.exports = router;