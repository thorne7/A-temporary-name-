const router = require('express').Router();
const { MedicalRecord } = require('../../models');

router.post('/', async (req, res) => {
    try {
      // create a new patient object with data from the request body
      const newRecord = MedicalRecord.create({
        condition: req.body.cdVal,
        patient_id: req.body.pID,
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