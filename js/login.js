window.onload = ()=>{
    const user = localStorage.getItem("session");
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

const loginUser = (event)=>{
    event.preventDefault();
    const form = document.forms.loginForm;

    // Name Check
    const email    = form.elements.email;
    const password = form.elements.password;
    // Container Check
    const emailField    = document.getElementById("email-box");
    const passwordField = document.getElementById("password-box");
    // Icon Check
    const emailIcon    = document.getElementById("email-icon");
    const passwordIcon = document.getElementById("password-icon");
    // Errors
    const errorEmail = document.getElementById("email-error");
    const errorPassword = document.getElementById("password-error");


    let hasValue = false

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

    if(hasValue) return;

    const user = localStorage.getItem(email.value.trim());
    const data = JSON.parse(user);
    if(data){
        if(data.password == password.value.trim()) {
            localStorage.setItem("session", user)
            location.replace("index.html");
            swal.fire({
                icon : "success",
                title : "Login Success"
            }).then(()=>{
                form.reset();
            })        
        }
        else{
            errorPassword.classList.remove("hidden");
            errorPassword.innerHTML = "Incorrect Password"
        }
    }
    else{
        errorEmail.classList.remove("hidden");
        errorEmail.innerHTML = "User doesn't exit try to signup first"
    }

}

// remove Validation
const removeValidation = (input, IconBox, idValue)=>{
    const icon = document.getElementById(IconBox);
    const error = document.getElementById(idValue);
    
    input.classList.remove("placeholder","text-red-600","font-medium");
    icon.classList.remove("text-red-400");

   if(error){
        error.classList.remove("block");
        error.classList.add("hidden");
    }
}