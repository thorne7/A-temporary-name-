const router = require('express').Router();
const { Doctor, MedicalRecord, Patient, Staff, User, Bed } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {

    try{

    }catch (err) {
    res.status(500).json(err);
  }
});