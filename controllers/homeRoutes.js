const sequelize = require('../config/connection');
const {roles, totalBeds} = require('../utils/constants');
const router = require('express').Router();
const { Doctor, MedicalRecord, Patient} = require('../models');
const userAuth = require('../utils/auth');
const role = require('../utils/constants');

router.get('/', userAuth, async (req, res) => {

    try{

        //Gets the bed data including patient details.
        const beds = await getBedData();

        let showHistory = false;

        //Only displays medical history if logged in user is a doctor.
        if(req.session.role === roles[0]) showHistory = true;

        //Renders home page with bed data.
        res.render('homepage', {beds:beds, show_History: showHistory, logged_in: req.session.logged_in});

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
            res.render('homepage', {beds:beds, show_History: showHistory, logged_in: req.session.logged_in});
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
        order: sequelize.col('bed_id')
    });

    // Serialize data so the template can read it
    const allBeds = bedData.map((bed) => bed.get({ plain: true }));

    //Loop through the data and generate new array for home page.
    for (let i = 0; i < allBeds.length; i++) {

        const bedInfo = allBeds[i];

        if(bedInfo['Bed ID'] !== null){

            const data = {
                bed_id: `${bedInfo['Bed ID']}`,
                patient_name: `${bedInfo['First Name']} ${bedInfo['Last Name']}`,
                admit_date: `${bedInfo['Admit Date'].toLocaleDateString()}`,
                discharge_Date: `${bedInfo['Dischage Date'].toLocaleDateString()}`,       
                doctor_name: `${bedInfo.doctor['First Name']} ${bedInfo.doctor['Last Name']}`,
                medical_condition: `${bedInfo.medical_record['Medical Condition']}`
            };
            
            beds.push(data);
        }
    }

    //If not all beds are allocated, adds remaining empty beds.
    if(beds.length < 10){

        //Runs the loop to add remaining beds.
        for (let i = 1; i <= totalBeds; i++) {

            //Checks whether the bed id already exists or not.
            if(!beds.some(data => data.bed_id === i)){
            
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
    }

    //console.log(beds);

    return beds;
}

module.exports = router;