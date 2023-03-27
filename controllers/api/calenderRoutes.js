const router = require('express').Router();
const { Bed, Patient, User } = require('../../models');
const userAuth = require('../../utils/auth');

// get all bookings for path "api/beds"
router.get('/:id', userAuth, async (req, res) => {
  try {
    const selectbedData = await Patient.findByPk(req.params.id, {
      attributes:[
        ['first_name', 'First Name'],
        ['last_name', 'Last Name'],
        ['date_admitted', 'Admit Date'],
        ['date_discharge', 'Dischage Date']
      ],
  });
  const selectBed = selectbedData.get({ plain: true });

router.post('/:Patient', async (req, res) => {
  try {
    //create a new patient oject with adata from the requested body
    const newPatientData = await new Patient({
      name: req.body.name,
      email:req.body.email,
      postcode:req.body.postcode,
      phone:req.body.phone,
      user_id:req.body.user_id,
      doctor:req.body.doctor_id,
    });

    req.status(200).json(newPatientData);
  } catch (err) {
    console.error('Failed to create patient:', err);
    res.status(500).json({ message: 'Failed to create patient.' });
  }
});

module.exports = router;
// /// use differencebetween dates method (not the official name) from (vanilla or dayJS) to get the number of days
// /// date admitted is the start date of the event of the calender
// /// use string methods to join patient first name and last name and make it the name of the event
// /// format this information into objects compatable with full calender
// /// use res.render to render the info the partial

    console.log(selectBed);
    // res.render('homepage', {
    //   beds,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
