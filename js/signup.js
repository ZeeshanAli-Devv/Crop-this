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