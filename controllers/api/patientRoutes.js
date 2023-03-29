const router = require('express').Router();
const { Patient } = require('../../models');

router.post('/', async (req, res) => {
    try {
      // create a new patient object with data from the request body
      const newPatient = Patient.create({
        first_name: req.body.fnVal,
        last_name: req.body.lnVal,
        postcode: req.body.pcVal,
        phone: req.body.phVal,
        date_admitted: new Date(req.body.daVal),
        date_discharge: new Date(req.body.ddVal),
        doctor_id: req.body.docVal,
        bed_id: req.body.bedVal
        // other patient fields here
      });
      // send a response indicating success and the new patient's ID
      res.status(201).json({ success: true });
    } catch (err) {
      // handle any errors and send an error response
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to create new patient.' });
    }
  });

  module.exports = router;