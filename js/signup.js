window.onload = ()=>{
    const user = localStorage.getItem("isLogin");
    if(user){
       location.replace("index.html"); 
    }
}

// Toggle Password
const togglepassword=(PasswordId , iconId)=>{
    const PasswordInput = document.getElementById(PasswordId);
    const icon = document.getElementById(iconId);

    if(PasswordInput.type == "password"){
        PasswordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
    else{
        PasswordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

// Check Validation

const createUser = (event)=>{
    event.preventDefault();
    const form = document.forms.signupForm;
    // Name Check
    const name            = form.elements.name;
    const email           = form.elements.email;
    const password        = form.elements.password;
    const confirmPassword = form.elements.confirmPassword;
    // Container Check
    const nameField            = document.getElementById("name-box");
    const emailField           = document.getElementById("email-box");
    const passwordField        = document.getElementById("password-box");
    const confirmPasswordField = document.getElementById("confirm-password-box");
    // Icon Check
    const userIcon            = document.getElementById("user-icon");
    const emailIcon           = document.getElementById("email-icon");
    const passwordIcon        = document.getElementById("password-icon");
    const confirmPasswordIcon = document.getElementById("confirm-password-icon");
    // Errors
    const errorPassword = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");


    let hasValue = false

    if(name.value.trim().length == 0){
        name.classList.add("placeholder","text-red-600","font-medium");
        nameField.classList.add("animate__shakeX")
        userIcon.classList.add("text-red-400");
        hasValue = true;
    }
    
    if(email.value.trim().length == 0){
        email.classList.add("placeholder","text-red-600","font-medium")
        emailField.classList.add("animate__shakeX")
        emailIcon.classList.add("text-red-400");
        hasValue = true;
    }

    if(password.value.trim().length == 0){
        password.classList.add("placeholder","text-red-600","font-medium");

        passwordField.classList.add("animate__shakeX");
        passwordIcon.classList.add("text-red-400");

        hasValue = true;
    }
    else if(password.value.trim().length < 8){
        password.classList.add("placeholder","text-red-600","font-medium");
        passwordField.classList.add("animate__shakeX");
        passwordIcon.classList.add("text-red-400");

        errorPassword.classList.remove("hidden");
        errorPassword.classList.add("block");
        errorPassword.innerHTML = "Password should be 8 character long!";

        hasValue = true;
    }

    if(confirmPassword.value.trim().length == 0){
        confirmPassword.classList.add("placeholder","text-red-600","font-medium")
        confirmPasswordField.classList.add("animate__shakeX")
        confirmPasswordIcon.classList.add("text-red-400");
        hasValue = true;
    }
    else if(confirmPassword.value.trim() !== password.value.trim()){
        confirmPassword.classList.add("placeholder","text-red-600","font-medium")
        confirmPasswordField.classList.add("animate__shakeX")
        confirmPasswordIcon.classList.add("text-red-400");
        confirmPasswordError.classList.remove("hidden");
        confirmPasswordError.innerHTML = "Password Didn't match!";
        hasValue = true;
    }

    if(hasValue) return;
    const key = email.value.trim()
    const user = JSON.stringify({
        name            : name.value.trim(),
        email           : email.value.trim(),
        password        : password.value.trim(),
        confirmPassword : confirmPassword.value.trim()
    })
    localStorage.setItem(key,user);
    form.reset();
    swal.fire({
        icon : "success",
        title : "Account Created"
    }).then(()=>{
        location.replace("login.html");
    })
}

// remove Validation
const removeValidation = (input, IconBox, passwordId)=>{
    const icon = document.getElementById(IconBox);
    const password = document.getElementById(passwordId);
    
    input.classList.remove("placeholder","text-red-600","font-medium");
    icon.classList.remove("text-red-400");

   if(password){
        password.classList.remove("block");
        password.classList.add("hidden");
    }
}