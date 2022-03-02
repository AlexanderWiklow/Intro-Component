const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener ('submit', e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if(firstName === '') {
        errorFunc(fname, 'First name cannot be empty')
    }

    else {
        successFunc(fname)
    }
} )

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message; 
    req.className += 'error';
    span.className += 'error-text';
}

function successFunc(req) {
    req.className += 'success' 
}