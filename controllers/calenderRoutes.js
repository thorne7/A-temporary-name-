const router = require('express').Router();
const { Bed, Patient, User } = require('../models');
const userAuth = require('../utils/auth');

router.get('/:id', userAuth, async (req, res) => {
  
  try {
    const data = await getData(req);
    res.render('calender', {data:JSON.stringify(data), logged_in: req.session.logged_in, showDashboard: true});
  
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

      return patientEvents;
}

module.exports = router;
