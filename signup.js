function validatesignup () {

    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let mobile = document.getElementById("mobile");
    let pwd = document.getElementById("pwd");
    let pwdcheck = document.getElementById("pwdcheck");
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");
    let error4 = document.getElementById("error4");
    let error5 = document.getElementById("error5");
    let error6 = document.getElementById("error6");
    // let excl = document.getElementById("excl");
    // let tick = document.getElementById("error6");
    // let form =document.getElementById("form");

    let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,4})(.[a-z]{2,8})?$/;
    let regexp2 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let regexp3 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(fname.value.trim()=="" && lname.value.trim()=="" && email.value.trim()==""  && mobile.value.trim()=="" && pwd.value.trim()=="" && pwdcheck.value.trim()=="")
        {
            error1.innerHTML = "First name can't be empty.";
            error2.innerHTML = "Last name can't be empty.";
            error3.innerHTML = "Invalid E-mail address";
            error4.innerHTML = "Invalid mobile number";
            error5.innerHTML = "Enter a strong password.";
            error6.innerHTML = "Re-enter your password";
            error1.style.color = "red";
            error2.style.color = "red";
            error3.style.color = "red";
            error4.style.color = "red";
            error5.style.color = "red";
            error6.style.color = "red";
            document.getElementById("i1").classList.add("fail");
            document.getElementById("i2").classList.add("fail");
            document.getElementById("i3").classList.add("fail");
            document.getElementById("i4").classList.add("fail");
            document.getElementById("i5").classList.add("fail");
            document.getElementById("i6").classList.add("fail");

            return false;
        }
    else if (fname.value.trim()==""){
        error1.innerHTML = "First name can't be empty.";
        error1.style.color = "red";
        document.getElementById("i1").classList.add("fail");
        return false;
    }
    else if(lname.value.trim()==""){
        error2.innerHTML = "Last name can't be empty.";
        error2.style.color = "red";
        document.getElementById("i2").classList.add("fail");

        error1.innerHTML = " ";
        document.getElementById("i1").classList.remove("fail");
        document.getElementById("i1").classList.add("success");
        return false;
    }
    else if(!regexp.test(email.value.trim())){
        error3.innerHTML = "Invalid E-mail address";
        error3.style.color = "red";
        document.getElementById("i3").classList.add("fail");
        error2.innerHTML = " ";
        error1.innerHTML = " ";

        document.getElementById("i1").classList.remove("fail");
        document.getElementById("i2").classList.remove("fail");
        document.getElementById("i2").classList.add("success");
        document.getElementById("i1").classList.add("success");
        return false;
    }
    else if(!regexp3.test(mobile.value.trim())){
        error4.innerHTML = "Invalid mobile number";
        error4.style.color = "red";
        document.getElementById("i4").classList.add("fail");

        error3.innerHTML = " ";
        error2.innerHTML = " ";
        error1.innerHTML = " ";
        document.getElementById("i1").classList.remove("fail");
        document.getElementById("i2").classList.remove("fail");
        document.getElementById("i3").classList.remove("fail");
        document.getElementById("i3").classList.add("success");
        document.getElementById("i2").classList.add("success");
        document.getElementById("i1").classList.add("success");
        return false;
    }
    else if(!regexp2.test(pwd.value.trim())){
        error5.innerHTML = "Enter a strong password.";
        error5.style.color = "red";
        document.getElementById("i5").classList.add("fail");

        error4.innerHTML = " ";
        error3.innerHTML = " ";
        error2.innerHTML = " ";
        error1.innerHTML = " ";
        document.getElementById("i1").classList.remove("fail");
        document.getElementById("i2").classList.remove("fail");
        document.getElementById("i3").classList.remove("fail");
        document.getElementById("i4").classList.remove("fail");
        document.getElementById("i4").classList.add("success");
        document.getElementById("i3").classList.add("success");
        document.getElementById("i2").classList.add("success");
        document.getElementById("i1").classList.add("success");
        return false;
    }
    else if(pwdcheck.value.trim()!=pwd.value.trim()){
        error6.innerHTML = "Passwords doesn't match";
        error6.style.color = "red";
        document.getElementById("i6").classList.add("fail");

        error5.innerHTML = " ";
        error4.innerHTML = " ";
        error3.innerHTML = " ";
        error2.innerHTML = " ";
        error1.innerHTML = " ";
        document.getElementById("i1").classList.remove("fail");
        document.getElementById("i2").classList.remove("fail");
        document.getElementById("i3").classList.remove("fail");
        document.getElementById("i4").classList.remove("fail");
        document.getElementById("i5").classList.remove("fail");
        document.getElementById("i5").classList.add("success");
        document.getElementById("i4").classList.add("success");
        document.getElementById("i3").classList.add("success");
        document.getElementById("i2").classList.add("success");
        document.getElementById("i1").classList.add("success");
        return false;
    }
    else{
        error6.innerHTML = " ";
        error5.innerHTML = " ";
        error4.innerHTML = " ";
        error3.innerHTML = " ";
        error2.innerHTML = " ";
        error1.innerHTML = " ";
        document.getElementById("i1").classList.remove("fail");
        document.getElementById("i2").classList.remove("fail");
        document.getElementById("i3").classList.remove("fail");
        document.getElementById("i4").classList.remove("fail");
        document.getElementById("i5").classList.remove("fail");
        document.getElementById("i6").classList.remove("fail");
        document.getElementById("i6").classList.add("success");
        document.getElementById("i5").classList.add("success");
        document.getElementById("i4").classList.add("success");
        document.getElementById("i3").classList.add("success");
        document.getElementById("i2").classList.add("success");
        document.getElementById("i1").classList.add("success");
        return true;
    }

    // password meter 
}

function trigger(){

    let indicator =  document.getElementById("indicator");
    let weak =  document.getElementById("weak");
    let medium =  document.getElementById("medium");
    let strong =  document.getElementById("strong");  
    let pwd = document.getElementById("pwd");
    let text = document.getElementById("pwdtext");

    if(pwd.value.trim()!=""){

        let regexpweak = /[a-z]/;
        let regexpmedium = /[A-Z]/;
        let regexpstrong = /\d+/;
        

        if (pwd.value.length <= 4 && (regexpweak.test(pwd.value) || regexpmedium.test(pwd.value) || regexpstrong.test(pwd.value)) )
        {   
            indicator.style.display = "flex";
            weak.classList.add("active");
            strong.classList.remove("active");
            medium.classList.remove("active");
            text.style.display ="block";
            text.innerHTML ="Your password is too weak.";
            text.style.color ="red";
        }

        if (pwd.value.length >= 8  && ((regexpweak.test(pwd.value) &&   regexpmedium. test(pwd.value)) || (regexpmedium.test(pwd.value) && regexpstrong.test(pwd.value)) || (regexpweak.test(pwd.value) && regexpstrong.test(pwd.value) ) )) 
        {   
            indicator.style.display = "flex";
            medium.classList.add("active");
            strong.classList.remove("active");
            text.style.display ="block";
            text.innerHTML ="Your password is medium strong.";
            text.style.color ="orange";
        }

       if (pwd.value.length >= 8 && (regexpweak.test(pwd.value) && regexpmedium.test(pwd.value) && regexpstrong.test(pwd.value)) )
        {   
            indicator.style.display = "flex";
            strong.classList.add("active");
            text.style.display ="block";
            text.style.color ="rgb(107, 204, 107)";
            text.innerHTML ="Your password is strong.";
        }

    }
    else{
        indicator.style.display = "none";
        text.style.display ="none";
    }
    
}

// show button


function pwdshow() {
    let showbtn = document.getElementById("showbtn");
    let eye = document.getElementById("eye");
    let eyeSlash = document.getElementById("eyeslash");

    let pwd = document.getElementById("pwd");
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