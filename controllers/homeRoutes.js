const sequelize = require('../config/connection');
const roles = require('../utils/constants');
const router = require('express').Router();
const { Doctor, MedicalRecord, Patient, Staff, User, Bed } = require('../models');
const userAuth = require('../utils/auth');

router.get('/', userAuth, async (req, res) => {

    try{

        const beds = getBedData(req.session.role);

        //Renders home page.
        res.render('homepage', beds);

    } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

    try{

        // If the user is already logged in, redirect the request to home route.
        if (req.session.logged_in) {

            const beds = getBedData(req.session.role);

            res.render('homepage', beds);
            return;
        }

        //Renders login page.
        res.render('login');

    } catch (err) {
        res.status(500).json(err);
    }
  });

async function getBedData(role){

    let beds = [];

    const bedData = await Patient.findAll({
        attributes:[
            ['first_name', 'First Name'],
            ['last_name', 'Last Name'],
            ['date_admitted', 'Admit Date'],
            ['date_discharge', 'Dischage Date']
        ],
        include:[
            {
                model: Bed,
                attributes: [['id', 'Bed ID']],
                order:[['id']]
                // required: true
            },
            {
                model: Doctor,
                attributes:[
                    ['first_name', 'First Name'],
                    ['last_name', 'Last Name'],
                ],
                required: true
            },
            {
                model: MedicalRecord,
                attributes:[['condition', 'Medical Condition']],
                required: true
            }
        ],
    });

    // Serialize data so the template can read it
    const allBeds = bedData.map((bed) => bed.get({ plain: true }));

    //console.log(allBeds);

    // if(role === roles[0]){


    //     beds = allBeds;
    // } else {


    // }

    return beds;
}

module.exports = router;