window.onload = ()=>{
    const user = localStorage.getItem("session");
    if(!user){
        location.replace("login.html");
    }
    userInfo()
}

// Logout Function
const logout=()=>{
    localStorage.removeItem("session");
    swal.fire({
        icon : "success",
        title : "Logout success"
    }).then(()=>{
        location.replace("login.html");
    })    
}

// Choose Picture
const changepicture=()=>{
    const input = document.getElementById("picture");
    const pics = document.getElementById("upload-pic");
    const file = input.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (e)=>{
        const data = e.target.result;
        pics.src = data;
        localStorage.setItem("pro", data);
    }
}

// Crop Function
let cropper = null;
const loadCropper = ()=>{
    const pic = document.getElementById("upload-pic");
    const download = document.getElementById("download-btn");

    if(!cropper){
        cropper = new Cropper(pic , {
            aspectRatio : 1,
            viewMode : 1
        })
        download.classList.remove("hidden")
    }
    else{
        download.classList.add("hidden")
        cropper.destroy();
        cropper = null;
    }
}

// Download Function
const downloadData=()=>{
    const canvas = cropper.getCroppedCanvas();
    const url = canvas.toDataURL()
    const a = document.createElement("a");
    a.href = url;
    a.download = "sample.png";
    a.click();
    a.remove();
}

// User Information
const userInfo=()=>{
    const session = localStorage.getItem("session");
    const profile = localStorage.getItem("profile");
    const pic = document.getElementById("user-pic");
    
    const pro = localStorage.getItem("pro");
    const pics = document.getElementById("upload-pic");

    const user = JSON.parse(session);
    const name = document.getElementById("session-name");
    const email = document.getElementById("session-email");

    name.innerHTML = user.name;
    email.innerHTML = user.email;

    if(profile){
        pic.src = profile;
    }

    if(pro){
        pics.src = pro;
    }
}

// User pic 
const changeuserpic=()=>{
    const input = document.getElementById("user-pic-input");
    const pic = document.getElementById("user-pic");
    const file = input.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (e)=>{
        const data = e.target.result;
        pic.src = data;
        localStorage.setItem("profile", data)
    }
}