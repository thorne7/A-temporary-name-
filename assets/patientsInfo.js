function showPatients() {
  // here we should fetch the patient information from our database
  // and store it in a JavaScript object or array

  let patients = [
    {
      img: "assets/img/doug1.jpg",
      id: "001",
      name: "John Doe",
      gender: "Male",
      age: 35,
      phoneNumber: "400 111 222",
      email: "john@yahoo.com",
    },
    {
      img: "assets/img/yoda1.jpg",
      id: "002",
      name: "Jane Smith",
      gender: "Female",
      age: 42,
      phoneNumber: "400 111 222",
      email: "jane@gmail.com",
    },
    {
      img: "assets/img/tony1.jpg",
      id: "003",
      name: "Bob Johnson",
      gender: "Male",
      age: 57,
      phoneNumber: "400 111 222",
      email: "bob@hotmail.com",
    },
  ];

  let patientTable = document.getElementById("patientTable");

  // Loop through each patient and add a new row to the table
  patients.forEach((patient) => {
    let row = patientTable.insertRow(-1);
    let imgCell = row.insertCell(0);
    let idCell = row.insertCell(1);
    let nameCell = row.insertCell(2);
    let ageCell = row.insertCell(3);
    let genderCell = row.insertCell(4);
    let phoneCell = row.insertCell(5);
    let emailCell = row.insertCell(6);

    imgCell.innerHTML = `<img src="${patient.img}" alt="${patient.name}'s Profile Picture" />`;
    idCell.textContent = patient.id;
    nameCell.textContent = patient.name;
    ageCell.textContent = patient.age;
    genderCell.textContent = patient.gender;
    phoneCell.textContent = patient.phoneNumber;
    emailCell.textContent = patient.email;
  });
}

// function showPatients() {
//     // Make an AJAX request to fetch the patient data
//     fetch('/getPatients')
//       .then(response => response.json())
//       .then(patients => {
//         let patientTable = document.getElementById("patientTable");
  
//         // Loop through each patient and add a new row to the table
//         patients.forEach((patient) => {
//           let row = patientTable.insertRow(-1);
//           let imgCell = row.insertCell(0);
//           let idCell = row.insertCell(1);
//           let nameCell = row.insertCell(2);
//           let ageCell = row.insertCell(3);
//           let genderCell = row.insertCell(4);
//           let phoneCell = row.insertCell(5);
//           let emailCell = row.insertCell(6);
  
//           imgCell.innerHTML = `<img src="${patient.img}" alt="${patient.first_name} ${patient.last_name}'s Profile Picture" />`;
//           idCell.textContent = patient.id;
//           nameCell.textContent = `${patient.first_name} ${patient.last_name}`;
//           ageCell.textContent = patient.age;
//           genderCell.textContent = patient.gender;
//           phoneCell.textContent = patient.phone;
//           emailCell.textContent = patient.email;
//         });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }