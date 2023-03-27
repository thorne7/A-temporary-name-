const router = require('express').Router();
const { Bed, Patient, User } = require('../../models');
const userAuth = require('../../utils/auth');

// get all bookings for path "api/beds"
router.get('/:id', userAuth, async (req, res) => {
  
  try {
    const data = await getData();
    res.render('calender', {data:patientBookings});
  
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

async function getData() {
  patientEvents = [];
  const selectbedData = await Patient.findAll({
    where: bed_id = req.params.id,
    attributes: [ first_name, last_name, date_admitted, date_discharge ]
  });
  const selectBed = selectbedData.map((patient) => patient.get({ plain: true }));

  console.log(selectBed);

    for (i=0; i < selectBed.length; i++) {
      var selectedPatient = selectBed[i];
      const eventObj = {
        title: selectedPatient.first_name + selectedPatient.last_name,
        start: date_admitted,
        end: date_discharged,
        allDay: true
      }
    
    patientEvents.push(eventObj);
    console.log(eventObj);
    }

      console.log(patientEvents);
      return patientEvents;
}

module.exports = router;
