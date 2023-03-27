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
