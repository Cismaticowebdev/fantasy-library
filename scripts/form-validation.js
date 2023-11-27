
const username = document.getElementById('username');
const passwordConfirmation = document.getElementById('passwordConfirmation');
const password = document.getElementById('password');
const regPassNumbers = /[0-9]/;
const regPassUpperLetter = /^(.[^A-Z]*)$/;
const regPassLowerLetter = /^(.[^a-z]*)$/;
const telephone = document.getElementById('telephone');
const myForm = document.getElementById('myForm');
const btnPass1 = document.getElementById('btn-pass1');
const btnPass2 = document.getElementById('btn-pass2');

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

function checkPasswords() {
    if (password.value === passwordConfirmation.value) {
        passwordConfirmation.setCustomValidity('');
        return true;
    } else {
        passwordConfirmation.setCustomValidity('Write the same password in both boxes');
        return false;
    }
}

telephone.addEventListener('input', function () {
    if (telephone.validity.patternMismatch) {
        telephone.setCustomValidity('Must use only numbers');
    } else {
        telephone.setCustomValidity('');
    }
});

myForm.addEventListener('submit', checkForm);

function checkForm(e) {
    if (!checkFormValidation() || !checkPasswords()) {
        e.preventDefault();
    }
}

function checkFormValidation() {
    if (username.validity.valid && email.validity.valid && password.validity.valid && passwordConfirmation.validity.valid && telephone.validity.valid) {
        return true;
    }
}

btnPass1.addEventListener('click', function (e) {
    e.preventDefault();

    const passType = password.getAttribute('type');
    if (passType === 'password') {
        password.setAttribute('type', 'text');
    } else if (passType === 'text') {
        password.setAttribute('type', 'password');
    }
});

btnPass2.addEventListener('click', function (e) {
    e.preventDefault();

    const passType = passwordConfirmation.getAttribute('type');
    if (passType === 'password') {
        passwordConfirmation.setAttribute('type', 'text');
    } else if (passType === 'text') {
        passwordConfirmation.setAttribute('type', 'password');
    }
});

