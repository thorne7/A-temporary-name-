const firstnameInput = document.getElementById('patient-firstname-input');
const lastnameInput = document.getElementById('patient-secondname-input');
const postcodeInput = document.getElementById('postcode');
const phoneInput = document.getElementById('patientphonenumber');
const dateadmitInput = document.getElementById('date-admit-input');
const datedischargeInput = document.getElementById('date-discharge-input');
const doctorInput = document.getElementById('doctor-type');
const conditionInput = document.getElementById('condition-input');
const path = document.location.pathname.substring(document.location.pathname.lastIndexOf('/')+1);

const warningElement = document.getElementById('warning-text');

var throwHalt = false;

const newpatientHandler = async (event) => {
    event.preventDefault();
    var throwHalt = false;
    warningElement.textContent= "";
    var fnVal = firstnameInput.value;
    var lnVal = lastnameInput.value;
    var pcVal = postcodeInput.value;
    var phVal = phoneInput.value;
    var daVal = dateadmitInput.value;
    var ddVal = datedischargeInput.value;
    var docVal = doctorInput.value;
    var cdVal = conditionInput.value;
    var bedVal = path;

    // get request to bring the dates of all patients for the bed, where dates are between the start date and end date of the new booking
    const responseFour = await fetch('/api/beds/all', {
        method: 'POST',
        body: JSON.stringify({ daVal, ddVal, bedVal }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => {
        if (response.status === 400) {
            console.log(response.status)
            throwHalt = true;
        }
    });
    // if the get request returns a patient the post request is cancelled and a text div displays bed already booked within this period
    if (throwHalt === true) {
        warningElement.textContent = "There is a booking for at least one of these dates!";
        return;
    }

    if (fnVal && lnVal && pcVal && phVal && daVal && ddVal && docVal && cdVal) {
        
        const response = await fetch('/api/beds', {
            method: 'POST',
            body: JSON.stringify({ fnVal, lnVal, pcVal, phVal, daVal, ddVal, docVal, bedVal }),
            headers: { 'Content-Type': 'application/json' },
          });
        const responseTwo = await fetch('/api/beds/select', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
          })
          .then(response => response.json());
          var pID = responseTwo.id;
          const responseThree = await fetch('/api/records', {
            method: 'POST',
            body: JSON.stringify({ cdVal, pID }),
            headers: { 'Content-Type': 'application/json' },
          });
          location.reload(); 
    } else {
        console.log('Please complete all fields');
        warningElement.textContent = "Please complete all fields!";
        return;
    }
}

document.getElementById('new-patient-form').addEventListener('submit', newpatientHandler);