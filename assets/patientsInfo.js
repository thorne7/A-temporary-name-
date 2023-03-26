function showPatients() {
    // here we should fetch the patient information from our database
    // and store it in a JavaScript object or array
  
    let patients = [
      {
        img: "assets/doug1.jpg",
        id: "001",
        name: "John Doe",
        gender: "Male",
        age: 35,
        phoneNumber: "400 111 222",
      },
      {
        img: "assets/yoda1.jpg",
        id: "002",
        name: "Jane Smith",
        gender: "Female",
        age: 42,
        phoneNumber: "400 111 222",
      },
      {
        img: "assets/tony1.jpg",
        id: "003",
        name: "Bob Johnson",
        gender: "Male",
        age: 57,
        phoneNumber: "400 111 222",
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
  
      imgCell.innerHTML = `<img src="${patient.img}" alt="${patient.name}'s Profile Picture" />`;
      idCell.textContent = patient.id;
      nameCell.textContent = patient.name;
      ageCell.textContent = patient.age;
      genderCell.textContent = patient.gender;
      phoneCell.textContent = patient.phoneNumber;
    });
  }