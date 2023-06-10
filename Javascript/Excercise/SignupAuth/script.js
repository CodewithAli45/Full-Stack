const nameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function validName(){
    const fullname = nameInput.value.trim();
    const nameError = document.getElementById('fullnameError');

    if(fullname === '' || fullname.length < 3){
        nameError.textContent = "Name should be atleast 3 Characters";
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validEmail(){
    const email = emailInput.value.trim();
    const emailError = document.getElementById('emailError');

    if(email === '' || !email.includes('@') || !email.includes('.')){
        emailError.textContent = "Enter valid email address";
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validPassword(){
    const password = passwordInput.value.trim();
    const passError = document.getElementById('passwordError');

    if(password === '' || password.length < 8){
        passError.textContent = "Password should be at least of 8 characters";
        return false;
    }

    passError.textContent = '';
    return true;
}

const submit = document.getElementById('regForm');
submit.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!validName() || !validEmail() || !validPassword()){
        return;
    }
    submit.reset();
    nameInput.focus();
    alert("successfully registered");

});

