const router = require('express').Router();
const { Bed, Patient, User } = require('../models');

// get all bookings for path "api/beds"
router.get('/beds/:id', async (req, res) => {
  try {
    const selectbedData = await Bed.findByPk(req.params.id, {
      include: [
        {
/// left join of bed on patient by patient id to bed showing patient first name, last name, date admitted, date discharged
            model: Bed,
            through: { attributes: [patient_id] }
        }
            ]
    });
    
/// use differencebetween dates method (not the official name) from (vanilla or dayJS) to get the number of days
/// date admitted is the start date of the event of the calender
/// use string methods to join patient first name and last name and make it the name of the event
/// format this information into objects compatable with full calender
/// use res.render to render the info the partial


    const beds = selectbedData.map((bed) =>
      bed.get({ plain: true })
      res.json(beds)
    );

    // res.render('homepage', {
    //   beds,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
