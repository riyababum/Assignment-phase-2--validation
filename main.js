// Login validation

function validate(){
    let email = document.getElementById("email");
    let error = document.getElementById("error");
    let password = document.getElementById("password");
    let error2 = document.getElementById("error2");

    let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;

    if(email.value.trim()=="" && password.value.trim()==""){
        error.innerHTML = "Enter valid e-mail address.";
        error.style.color = "red";
        error2.innerHTML = "Enter valid password.(Min. 8 characters)";
        error2.style.color = "red";

        document.getElementById("i1").classList.add("fail");
        document.getElementById("i2").classList.add("fail");

        return false;   
    }

    else if(!regexp.test(email.value.trim()) && password.value.trim().length < 8)
    {
        error.innerHTML = "Enter valid e-mail address";
        error2.innerHTML = "Enter correct password.(Min. 8 characters)";
        error.style.color = "red";
        error2.style.color = "red";

        document.getElementById("i1").classList.add("fail");
        document.getElementById("i2").classList.add("fail");
        return false;
    }

    else if(!regexp.test(email.value.trim())){
        error.innerHTML = "Enter valid e-mail address";
        error2.innerHTML = " ";
        error.style.color = "red";
        document.getElementById("i1").classList.add("fail");
        document.getElementById("i2").classList.remove("fail");
        return false;
    }

    else if(password.value.trim().length < 8){
        error2.innerHTML = "Enter valid password.(Min. 8 characters)";
        error.innerHTML = " ";
        error.style.color = "green";
        error2.style.color = "red"; 
        document.getElementById("i1").classList.remove("fail");
        document.getElementById("i1").classList.add("success");
        document.getElementById("i2").classList.add("fail");
        return false;
    }
    else {
        error2.style.color = "green"; 
        document.getElementById("i2").classList.remove("fail");
        document.getElementById("i2").classList.add("success");
        return true;
        }
}

function pwdshow() {
    let showbtn = document.getElementById("showbtn");
    let eye = document.getElementById("eye");
    let eyeSlash = document.getElementById("eyeslash");

    let pwd = document.getElementById("password");
    if(pwd.type == "password"){
        pwd.type = "text";
        eyeSlash.style.display="none";
        eye.style.display="block";
    }
    else{
        pwd.type = "password";
        eyeSlash.style.display="block";
        eye.style.display="none";
    }
}



