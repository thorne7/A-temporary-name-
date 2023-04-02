# Patient Management System

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Git Bash](https://img.shields.io/badge/GIT%20Bash-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Description
Patient management system that quickly identifies a bed that a patient could be admitted to and their information.

## Table of Contents
* [User Story](#user-story)
* [Usage](#usage)
* [Deployment](#deployment)
* [Screenshots](#screenshots)
* [License](#license)
* [Contributors](#contributors)

## User Story
- As a doctor I want to be able to log into a secure site where I can access patients’ information and be able to view what bed their admission details. 
- As a doctor I need to be able to view patient’s medical record that’s been hidden from other users. 
- As a staff I need to be able to log into a secure site and be able to admit a new patient to a bed as well.


## Usage
- When user launches the home page, user is redirected to login page if not logged in already.
- When log in page is launched, a form is displayed to enter email address and password to login.
- When user logs in, user is presented with a home page displaying all bed information with patient details.
- If no patient is allocated to a bed, no patient data is displayed.
- If logged in user is a doctor, user is able to see patient's medical condition.
- If logged in user is a medical staff, user is not able to see patient's medical condition.
- When user click on a bed, a calendar page for selected bed is displayed which also contains a booking button for the bed.
- User is able to navigate to different months to see past, current and future patient allocations for the bed.
- When use clicks on booking button, user is presented with a form where user can enter patient details, start date, expected discharge data, doctor name and medical condition.
- Patient information is added to the database and displayed on the calendar page.

## Deployment
Deployed webpage:https://hospitalmanagementsystem.herokuapp.com/

## Screenshots
Login Page

![Login Page](public/images/LoginPage.png)

Home Page

![Home Page](public/images/HomePage.png)

Calendar Page

![Calendar Page](public/images/CalendarPage.png)

Add New Patient Form

![Add New Patient Form](public/images/AddNewPatient.png)

## Contributors

Breno Ferreira Campos: https://github.com/Brenofc1

Daisy Chemasas: https://github.com/Chemasas

Darien Hallam: https://github.com/thorne7

Nilesh Patel: https://github.com/NileshPatel83

Timothy Van Mook-Letcher: https://github.com/TVML24

## License
The project is licensed under: MIT.
