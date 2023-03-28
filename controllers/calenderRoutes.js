const router = require('express').Router();
const { Bed, Patient, User } = require('../models');
const userAuth = require('../utils/auth');

// get all bookings for path "api/beds"
router.get('/:id', userAuth, async (req, res) => {
  
  try {
    const data = await getData(req);
    console.log(data);
    res.render('calender', {data:JSON.stringify(data)});
  
// /// use differencebetween dates method (not the official name) from (vanilla or dayJS) to get the number of days
// /// date admitted is the start date of the event of the calender

// /// use string methods to join patient first name and last name and make it the name of the event
// /// format this information into objects compatable with full calender
// /// use res.render to render the info the partial

    // res.render('homepage', {
    //   beds,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

async function getData(req) {
  patientEvents = [];
  const selectbedData = await Patient.findAll({
    where: { bed_id: req.params.id },
  });

  const selectBed = selectbedData.map((patient) => patient.get({ plain: true }));

    for (i=0; i < selectBed.length; i++) {

      var selectedPatient = selectBed[i];

      const eventObj = {
        title: selectedPatient.first_name + " " + selectedPatient.last_name,
        start: selectedPatient.date_admitted,
        end: selectedPatient.date_discharge,
        allDay: true
      }
    
    patientEvents.push(eventObj);

    }

      console.log(patientEvents);
      return patientEvents;
}

module.exports = router;
