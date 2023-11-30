// Get the elements from the html (username, password, passwordConfirmation, telephone, form, and the buttons to show the password and confirmation fields)
const username = document.getElementById('username');
const passwordConfirmation = document.getElementById('passwordConfirmation');
const password = document.getElementById('password');
const telephone = document.getElementById('telephone');
const myForm = document.getElementById('myForm');
const btnPass1 = document.getElementById('btn-pass1');
const btnPass2 = document.getElementById('btn-pass2');
const regPassNumbers = /[0-9]/; // Regular expression that includes numbers from 0 to 9
const regPassUpperLetter = /^(.[^A-Z]*)$/; // Regular expression to check if there is at least an upper case letter
const regPassLowerLetter = /^(.[^a-z]*)$/; // Regular expression to check if there is at least a lower case letter


//Event listener used to set a custom error message when the pattern in username is not correct
username.addEventListener('input', function () {
    if (username.validity.patternMismatch) {
        username.setCustomValidity('Must use only letters and numbers, special characters can not be used')
    } else {
        username.setCustomValidity('');
    }
});

//Event listener used to set a custom error message when the pattern in password is not correct
password.addEventListener('input', function () {
    if (password.validity.patternMismatch) {
        password.setCustomValidity('Must use only letters and numbers, special characters can not be used');
    } else if (!regPassNumbers.test(password.value)) {
        password.setCustomValidity('Password must include at least a number');
    } else if (regPassUpperLetter.test(password.value)) {
        password.setCustomValidity('Password must include at least one uppercase letter');
    } else if (regPassLowerLetter.test(password.value)) {
        password.setCustomValidity('Password must include at least one lowercase letter');
    } else {
        password.setCustomValidity('');
    }
});

//Event listener used to set a custom error message when the input is wrong (only numbers are allowed)
telephone.addEventListener('input', function () {
    if (telephone.validity.patternMismatch) {
        telephone.setCustomValidity('Must use only numbers');
    } else {
        telephone.setCustomValidity('');
    }
});

// Submit button to check that the passwords match
const formBtn = document.getElementById('formBtn');
formBtn.addEventListener('click', checkPasswords);

// Event listener on form submit to check that every input is valid before submiting it
myForm.addEventListener('submit', checkForm);

// Check if the form fields and the passwords are valid, if not, the form won't be submitted and the page won't refresh
function checkForm(e) {
    let formValid = checkFormValidation();
    let passwordsValid = checkPasswords();

    if (formValid === false || passwordsValid === false) {
        e.preventDefault();
    } else {
        e.Submit();
    }
}

// Check every every input is valid and return true
function checkFormValidation() {
    if (username.validity.valid && email.validity.valid && password.validity.valid && passwordConfirmation.validity.valid && telephone.validity.valid) {
        return true;
    }
}

// Check if the password and password confirmation have the same value
function checkPasswords() {
    if (password.value === passwordConfirmation.value) {
        passwordConfirmation.setCustomValidity('');
    
        myForm.removeEventListener('submit', checkForm); // Need to reattach the event listener after running preventDefault()
        myForm.addEventListener('submit', checkForm);
        
        return true;
    } else {
        passwordConfirmation.setCustomValidity('Write the same password in both boxes');
        return false;
    }
}

// Toggle the password input type between text/password. This way the user can toggle it to check what he wrote in the input
btnPass1.addEventListener('click', function (e) {
    e.preventDefault();

    const passType = password.getAttribute('type');
    if (passType === 'password') {
        password.setAttribute('type', 'text');
    } else if (passType === 'text') {
        password.setAttribute('type', 'password');
    }
});

// Toggle the password confirmation input type between text/password. This way the user can toggle it to check what he wrote in the input
btnPass2.addEventListener('click', function (e) {
    e.preventDefault();

    const passType = passwordConfirmation.getAttribute('type');
    if (passType === 'password') {
        passwordConfirmation.setAttribute('type', 'text');
    } else if (passType === 'text') {
        passwordConfirmation.setAttribute('type', 'password');
    }
});

