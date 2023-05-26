const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});
const setError = (element, message) => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');
    const input = inputBox.querySelector('input');
    const errorIcon = inputBox.querySelector('img');

    input.placeholder = '';
    errorIcon.style.display = 'block';
    errorDisplay.innerText = message;
    inputBox.classList.add('error');
    inputBox.classList.remove('success');
};
const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');
    const errorIcon = inputBox.querySelector('img');

    errorIcon.style.display = 'none';
    errorDisplay.innerText = '';
    inputBox.classList.add('success');
    inputBox.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fnameValue === '') {
        setError(fname, 'First Name cannot be empty');
    }
    else {
        setSuccess(fname);
    }

    if(lnameValue === '') {
        setError(lname, 'Last Name cannot be empty');
    }
    else {
        setSuccess(lname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Looks like this is not an email');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else {
        setSuccess(password);
    }
};