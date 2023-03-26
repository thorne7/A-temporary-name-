const mysql = require('mysql');

// create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'hospital_db'
});

// connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// function to check the email and password
function login(email, password) {
  // retrieve the user with the given email from the database
  const sql = `SELECT * FROM users WHERE email = '${email}'`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    const user = result[0];

    // check if the user exists and if the password is correct
    if (user && user.password === password) {
      // successful login, redirect to the appropriate page based on the user's role
      redirectToPage(email);
    } else {
      // unsuccessful login, display an error message to the user
      displayErrorMessage('Invalid email or password');
    }
  });
}

login('john@example.com', 'password123');

// the following function is to direct user to desired page

function redirectToPage(email) {
  // check if email is from a doctor
  if (email.endsWith('@hospital.com')) {
    window.location.href = 'doctor-page.html';
  }
  // check if email is from a patient
  else if (email.endsWith('@patient.com')) {
    window.location.href = 'patient-page.html';
  }
  // check if user is a hospital staff
  else if (email.endsWith('@staff.com')) {
    window.location.href = 'staff-page.html';
  }
  // if email doesn't match any of the above conditions, redirect to a default page
  else {
    window.location.href = 'default-page.html';
  }
}