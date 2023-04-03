const sequelize = require('../config/connection');
const {roles, totalBeds} = require('../utils/constants');
const router = require('express').Router();
const { Doctor, MedicalRecord, Patient} = require('../models');
const userAuth = require('../utils/auth');
const role = require('../utils/constants');
const { Op } = require('sequelize');

router.get('/', userAuth, async (req, res) => {

    try{

        //Gets the bed data including patient details.
        const beds = await getBedData();

        let showHistory = false;

        //Only displays medical history if logged in user is a doctor.
        if(req.session.role === roles[0]) showHistory = true;

        //Renders home page with bed data.
        res.render('homepage', {beds:beds, show_History: showHistory, logged_in: req.session.logged_in, showDashboard: false});

    } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {

    try{

        // If the user is already logged in, redirect the request to home route.
        if (req.session.logged_in) {

            //Gets the bed data including patient details.
            const beds = await getBedData();

            let showHistory = false;

            //Only displays medical history if logged in user is a doctor.
            if(req.session.role === roles[0]) showHistory = true;

            //Renders home page with bed data.
            res.render('homepage', {beds:beds, show_History: showHistory, logged_in: req.session.logged_in, showDashboard: false});
            return;
        }

        //Renders login page.
        res.render('login');

    } catch (err) {
        res.status(500).json(err);
    }
  });

//Gets the bed data including patient details.
async function getBedData(){

    let beds = [];

    const today = new Date();

    //Sqquelize query to get bed id, patient data and doctor name.
    const bedData = await Patient.findAll({
        attributes:[
            ['first_name', 'First Name'],
            ['last_name', 'Last Name'],
            ['date_admitted', 'Admit Date'],
            ['date_discharge', 'Dischage Date'],
            ['bed_id', 'Bed ID']
        ],
        include:[
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

        //Where discharge date is greater or equal than today and bed id is not null.
        where:{
            date_discharge :{
                [Op.gte]: today
            },
            bed_id:{
                [Op.ne]: null
            }
        },

        //Orders the data by discharge date.
        //This way, only first patient is added to final array
        //If the bed has two patients.
        //First patient will be before the second patient.
        order: sequelize.col('date_discharge')
    });

    // Serialize data so the template can read it
    const allBeds = bedData.map((bed) => bed.get({ plain: true }));

    //Runs the loop to add remaining beds.
    for (let i = 1; i <= totalBeds; i++){

        //Tries to find the index of an item in beds record.
        const index = allBeds.findIndex((bed) => bed['Bed ID'] == i);

        //If the record is found, adds the record to beds list.
        if(index !== -1){

            const bedInfo = allBeds[index];

            const data = {
                bed_id: `${bedInfo['Bed ID']}`,
                patient_name: `${bedInfo['First Name']} ${bedInfo['Last Name']}`,
                admit_date: `${bedInfo['Admit Date'].toLocaleDateString()}`,
                discharge_date: `${bedInfo['Dischage Date'].toLocaleDateString()}`,       
                doctor_name: `${bedInfo.doctor['First Name']} ${bedInfo.doctor['Last Name']}`,
                medical_condition: `${bedInfo.medical_record['Medical Condition']}`
            };
                
            beds.push(data);
        }

        //If the record is not found, empty data is added to beds list.
        else{
            const data = {
                bed_id: `${i}`,
                patient_name: '',
                admit_date: '',
                discharge_Date:'',      
                doctor_name: '',
                medical_condition: ''
            };
            
            beds.push(data);
        }     
    }

    //Sorts the array by bed number.
    beds.sort(function(a, b){return a.bed_id - b.bed_id});

    return beds;
}

module.exports = router;