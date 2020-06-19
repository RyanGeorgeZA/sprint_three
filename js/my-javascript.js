//function that will cause navbar to change colour when clicked
function navColour(newColour) {
    var navbar = document.getElementById("navbar");
    navbar.style.backgroundColor = newColour; //Javascript implementation on CSS code
}

//Form data validation- ensure that form data is entered and that it's entered correctly
//Ensure that first name field can't be empty and can't have non-alphabet characters
function validateName() {
    var nameInput = document.getElementById("fname");
    var letters = /^[A-Za-z]+$/;
    if (nameInput.value == ""){
        alert("First name field cannot be blank");
        nameInput.focus();
        return false
    }
    else if (nameInput.value.match(letters)) {
    nameInput.focus();
    return true;
    }
    else {
    alert("Your name cannot contain non-alphabet characters");
    nameInput.focus();
    return false;
    }
    }

//Ensure that last name field can't be empty and can't have non-alphabet characters
function validateSurname() {
    var surnameInput = document.getElementById("lname");
    var letters = /^[A-Za-z]+$/;
    if (surnameInput.value == ""){
        alert("Last name field cannot be blank");
        surnameInput.focus();
        return false;
    }
    else if (surnameInput.value.match(letters)) {
    surnameInput.focus();
    return true;
    }
    else {
    alert("Your last name cannot contain non-alphabet characters");
    surnameInput.focus();
    return false;
    }
    }

//Ensure that email field can't be empty and that it is a valid email entry
function validateEmail() {
    var emailInput = document.getElementById("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.value == ""){
        alert("Email field cannot be blank");
        emailInput.focus();
        return false
    }
    else if (emailInput.value.match(mailformat)) {
    emailInput.focus();
    return true;
    }
    else {
    alert("You have entered an invalid email address!");
    emailInput.focus();
    return false;
    }
    }

//Ensure that message field can't be empty
function validateMessage() {
    var messageInput = document.getElementById("message");
    if (messageInput.value == ""){
        alert("Message field cannot be blank");
        messageInput.focus();
        return false;
    }
    else {
        return true;
    }
    }

//A function that is invoked by the onclick event when all input data validation is met
function validateForm(){
    if (validateName() && validateSurname() && validateEmail() && validateMessage()) {
    alert("Thank you. Your message has been submitted!");
    location.reload();
}
}
