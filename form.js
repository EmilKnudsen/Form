let form = document.getElementsByTagName("form")[0];
let statusUsername = document.querySelector(".statusMessage.username");
let statusPassword = document.querySelector(".statusMessage.password");
let statusName = document.querySelector(".statusMessage.name");
let statusLastName = document.querySelector(".statusMessage.lastname");
let statusAdress = document.querySelector(".statusMessage.adress");
let statusEmail = document.querySelector(".statusMessage.email");


form.addEventListener("submit", function(event){
    event.preventDefault();


    let status = true;

    statusName.innerText = "";
    statusLastName.innerText = "";
    statusAdress.innerText = "";
    statusUsername.innerText = "";
    statusPassword.innerText = "";
    statusEmail.innerText = "";  
    
    if (form.name.value == "") {
        statusName.innerText = "Udfyld navn!";
        status = false;
    }

    if (form.lastname.value == "") {
        statusLastName.innerText = "Udfyld efternavn!";
        status = false;
    }

    if (form.adress.value == "") {
        statusAdress.innerText = "Udfyld adresse!";
        status = false;
    }

    
    if (form.username.value == "") {
        statusUsername.innerText = "Udfyld brugernavn!";
        status = false;
    }

    if (form.password.value == "") {
        statusPassword.innerText = "Udfyld password!";
        status = false;
    }

    if (form.email.value == "") {
        statusEmail.innerText = "Udfyld e-mail!";
        status = false;
    }

    if (!status) return;



}); 