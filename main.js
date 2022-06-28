function showPassword() {
    var password = document.getElementById('pwd');
    if (password.type === 'password') {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}
function validateReg(){
var email =
document.forms.RegForm.Email.value;
var phone=document.forms.RegForm.Phone.value;
var name=document.forms.RegForm.Name.value;
var password=document.forms.RegForm.Password.value;
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
var regPhone=/^\d{10}$/;                                       
var regName = /\d+$/g;  
var format1=/\d{3}\s\d{3}\s\d{4}/;
    var format2=/\d{3}.\d{3}.\d{4}/;
    var format3=/\d{3}-\d{3}-\d{4}/;   
if (name == "" || regName.test(name)) {
    window.alert("Please enter your name properly.");
    name.focus();
    return false;
}
if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
}
if (password == "") {
    alert("Please enter your password");
    password.focus();
    return false;
}

if(password.length <8){
    alert("Password should be atleast 8 character long");
    password.focus();
    return false;

}
if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter valid phone number.");
    phone.focus();
    return false;
}
if(phone.match(format1)||phone.match(format2)||phone.match(format3)){
    console.log("Valid phone");
}else{
    alert("Enter a valid phone number");
}
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
if(password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.match(numbers)){
    console.log("You have entered a valid password");
}else{
    alert("Password must contain an upper case a lower case and a number.")
}
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#pwd');
const phoneEl=document.getElementById('#phone');

const form = document.querySelector('#signup');
}

function validatePassword(password) {
                
    
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
  
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]");
    matchedCase.push("[A-Z]");      
    matchedCase.push("[0-9]");     
    matchedCase.push("[a-z]");     

    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }

    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}
function validateLog(){
    var email =
document.forms. logForm.Email.value;
var password=document.forms.logForm.Password.value;
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
}
if (password == "") {
    alert("Please enter your password");
    password.focus();
    return false;
}

if(password.length <6){
    alert("Password should be atleast 6 character long");
    password.focus();
    return false;

}
}
function validatePhone(phone){
    
  

}