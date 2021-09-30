const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// At least 5 letters (?=.{5,})
const passwordRegex_weak = /[a-zA-Z0-9]{5,}$/;

// 1 uppercase letter (?=.*[A-Z])
// At least 5 letters (?=.{5,})
const passwordRegex_medium = /(?=.*[A-Z])[a-zA-Z0-9]{5,}$/;

// 1 lowercase letter (?=.*[a-z])
// 1 uppercase letter (?=.*[A-Z])
// One digit (?=.*[0-9])
// At least 5 characters long (?=.{8,})
const passwordRegex_strong = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{5,}$/;

// One lowercase letter (?=.*[a-z])
// One uppercase letter (?=.*[A-Z])
// One digit (?=.*[0-9])
// At least 8 characters long (?=.{10,})
const passwordRegex_VeryStrong = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{10,}$/;

const form = document.getElementById("form");
const successAlert = document.getElementById("successAlert");

const emailInput = document.querySelector("#email_input");
const passwordInput = document.querySelector("#password_input");

form.addEventListener('submit', e => {
    e.preventDefault();

    if(submitForm == true) {
        successAlert.style.display = "block";

        emailInput.value = "";
        passwordInput.value = "";
        emailError.innerHTML = "";
        passwordError.innerHTML = "";

        passwordError.removeAttribute('class', 'success');
        emailError.removeAttribute('class', 'success');
    }
});

let submitForm = false;

document.addEventListener('keyup', e => {

    if(emailRegex.test(emailInput.value)) {
        emailError.innerHTML = "Correct!";
        emailError.setAttribute('class', 'success');

        passwordError.setAttribute('class', 'Error');
        passwordError.innerHTML = "Declined";
    
        if(passwordRegex_weak.test(passwordInput.value)) {
            passwordError.setAttribute('class', 'passwordWeak');
            passwordError.innerHTML = "Weak";
        }
    
        if(passwordRegex_medium.test(passwordInput.value)) {
            passwordError.setAttribute('class', 'passwordMedium');
            passwordError.innerHTML = "Medium";
        }
    
        if(passwordRegex_strong.test(passwordInput.value)) {
            passwordError.setAttribute('class', 'passwordStrong');
            passwordError.innerHTML = "Strong";
        }
    
        if(passwordRegex_VeryStrong.test(passwordInput.value)) {
            passwordError.setAttribute('class', 'success');
            passwordError.innerHTML = "Very Strong";

            submitForm = true;
        }
    }

    else {
        emailError.setAttribute('class', 'Error');
        emailError.innerHTML = "Enter a valid email <br /> Ex. email@email.dk";
    }
});

if(submitForm == true) {
    successAlert.style.display = "block";
}

if(successAlert.style.display == "block") {
    submitForm = false;
}