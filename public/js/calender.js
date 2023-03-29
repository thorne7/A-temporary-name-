const firstnameInput = document.getElementById('patient-firstname-input');
const lastnameInput = document.getElementById('patient-secondname-input');
const postcodeInput = document.getElementById('postcode');
const phoneInput = document.getElementById('patientphonenumber');
const dateadmitInput = document.getElementById('date-admit-input');
const datedischargeInput = document.getElementById('date-discharge-input');
const doctorInput = document.getElementById('doctor-type');
const conditionInput = document.getElementById('condition-input');

const path = document.location.pathname.substring(document.location.pathname.lastIndexOf('/')+1);

const newpatientHandler = async (event) => {
    event.preventDefault();
    var fnVal = firstnameInput.value;
    var lnVal = lastnameInput.value;
    var pcVal = postcodeInput.value;
    var phVal = phoneInput.value;
    var daVal = dateadmitInput.value;
    var ddVal = datedischargeInput.value;
    var docVal = doctorInput.value;
    var cdVal = conditionInput.value;
    var bedVal = path;

    if (fnVal && lnVal && pcVal && phVal && daVal && ddVal && docVal && cdVal) {
        const response = await fetch('/api/beds', {
            method: 'POST',
            body: JSON.stringify({ fnVal, lnVal, pcVal, phVal, daVal, ddVal, bedVal }),
            headers: { 'Content-Type': 'application/json' },
          });
        // const responseTwo = await fetch('/api/beds', {
        //     method: 'POST',
        //     body: JSON.stringify({ fnVal, lnVal, pcVal, phVal, daVal, ddVal, bedVal }),
        //     headers: { 'Content-Type': 'application/json' },
        //   });


    } else {
        console.log('Please complete all fields');
    }
}

document.getElementById('new-patient-form').addEventListener('submit', newpatientHandler);