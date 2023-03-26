const sequelize = require('../config/connection');
const roles = require('../utils/constants');
const router = require('express').Router();
const { Doctor, MedicalRecord, Patient, Staff, User, Bed } = require('../models');
const userAuth = require('../utils/auth');

router.get('/', userAuth, async (req, res) => {

    try{

        //Gets the bed data including patient details.
        const beds = await getBedData(req.session.role);

        //Renders home page with bed data.
        res.render('homepage', {beds:beds});

    } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {

    try{

        // If the user is already logged in, redirect the request to home route.
        if (req.session.logged_in) {

            //Gets the bed data including patient details.
            const beds = await getBedData(req.session.role);

            //Renders home page with bed data.
            res.render('homepage', {beds:beds});
            return;
        }

        //Renders login page.
        res.render('login');

    } catch (err) {
        res.status(500).json(err);
    }
  });

//Gets the bed data including patient details.
async function getBedData(role){

    let beds = [];

    //Sqquelize query to get bed id, patient data and doctor name.
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
        ]
    });

    // Serialize data so the template can read it
    const allBeds = bedData.map((bed) => bed.get({ plain: true }));

    //Loop through the data and generate new array for home page.
    for (let i = 0; i < allBeds.length; i++) {

        const bedInfo = allBeds[i];

        let bedID = null;

        if(bedInfo.bed !== null) bedID = bedInfo.bed['Bed ID'];

        //console.log(bedInfo);
        // console.log(`Patient Name: ${bedInfo['First Name']} ${bedInfo['Last Name']}`);
        // console.log(`Admit Name: ${bedInfo['Admit Date']}`);
        // console.log(`Dischage Name: ${bedInfo['Dischage Date']}`);
        // console.log(`Bed ID: ${bedID}`);
        // console.log(`Doctor Name: ${bedInfo.doctor['First Name']} ${bedInfo.doctor['Last Name']}`);
        // console.log(`Medical Condition: ${bedInfo.medical_record['Medical Condition']}`);
        // console.log('');

        const data = {
            patient_name: `${bedInfo['First Name']} ${bedInfo['Last Name']}`,
            admit_date: `${bedInfo['Admit Date']}`,
            discharge_Date: `${bedInfo['Dischage Date']}`,
            bed_id: `${bedID}`,
            doctor_name: `${bedInfo.doctor['First Name']} ${bedInfo.doctor['Last Name']}`,
            medical_condition: `${bedInfo.medical_record['Medical Condition']}`,
        };
        
        beds.push(data);
    }

    console.log(beds);

    // if(role === roles[0]){


    //     beds = allBeds;
    // } else {


    // }

    return beds;
}

module.exports = router;