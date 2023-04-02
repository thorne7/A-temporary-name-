const router = require('express').Router();
const { Patient } = require('../../models');
const { Op } = require('sequelize');
const dayjs = require('dayjs');
var isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween)

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
      })
      console.log(newPatient);

      // send a response indicating success and the new patient's ID
      res.status(201).json({ success: true });
    } catch (err) {
      // handle any errors and send an error response
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to create new patient.' });
    }
  });

  router.get('/select', async (req, res) => {
    try {
        const allData = await Patient.findOne({
            order: [
                ['id', 'DESC'],
            ],
        });
        var simpleData = allData.get({ plain: true });
        res.status(200).send(JSON.stringify(simpleData));
    } catch (err) {
        // handle any errors and send an error response
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to create new patient.' });
      }
    });

    router.post('/all', async (req, res) => {
        try {
            const allData = await validateCheck(req);
            console.log(allData);
            if (allData === true) {
                res.status(200).json({ message:"true" });
            } else {
                res.status(400).json({ message:"false" });
            }
        } catch {
            console.error(err);
        }
    })


async function validateCheck(req) {
    const today = new Date();
    var date_admit = new Date(req.body.daVal);
    var date_disch = new Date(req.body.ddVal);
    if (date_disch < date_admit) {
        return false;
    }
    holderArray = [];
    const bookedbedPatients = await Patient.findAll({
        where: {
            bed_id: req.body.bedVal,
        },
    });
    for (i=0; i < bookedbedPatients.length; i++) {
        var startDate = new Date (bookedbedPatients[i].date_admitted);
        var endDate = new Date (bookedbedPatients[i].date_discharge);
        
      if(date_admit < today || date_disch < today){
        return false;
      }
      else if(date_admit > startDate && date_admit < endDate){
        return false;
      } else if(date_disch > startDate && date_disch < endDate){
        return false;
      }
    }
    return true;
}
  module.exports = router;