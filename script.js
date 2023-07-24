"use strict";

const email = document.querySelector(".login-page-form--email");
const password = document.querySelector(".login-page-form--password");
const signIn = document.querySelector("#signIN");
const signUp = document.querySelector("#signUP");
const logPage = document.querySelector(".login-page");
const subPage = document.querySelector(".signup-page");



const loginEmailRequired = document.querySelector(".required-Email");
const loginEmailAcNOt = document.querySelector(".login-page--accNotFound");
const loginPassRequired = document.querySelector(".required-pass");
const loginPassWrongpass = document.querySelector(".required-wrong");



const finalsignUp = document.querySelector("#SignUP");
const GetFirst = document.querySelector(".signup-page-form--firstname");
const Getlast = document.querySelector(".signup-page-form--lastname");
const Getmail = document.querySelector(".signup-page-form--email");
const Getpass = document.querySelector(".signup-page-form--password");
const Getcomform = document.querySelector(".signup-page-form--conformpassword");
const wrong = document.querySelectorAll(".signup-page-form--wrongPass");
const required = document.querySelector(".checkbox");
const checked = document.querySelector(".signup-page--required");

const fieldfirst = document.querySelector(".required-first");
const fieldlast = document.querySelector(".required-last");
const fieldemail = document.querySelector(".required-email");
const fieldpassword = document.querySelector(".required-password");
const fieldconform = document.querySelector(".required-conform");


const logined = document.querySelector(".logined");
const back = document.querySelector(".signin");


const account = {
  first: "",
  email: "",
  pass: "",
}

class details {
  constructor(first, last, email, pass, compass) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.pass = pass;
    this.compass = compass;
  }

  comprair = function () {
    return `${this.pass} === ${this.compass} ? ${true} :${false}`;
  };

  createAcc = function(){
    account.first = this.first;
    account.email = this.email;
    account.pass = this.pass;
  };
}

const redBlock = function(field, place){
  field.style.display = "block";
  place.style.outline = "red solid 2px";
}

const revRedBlock = function(field, place){
  field.style.display = "none";
  place.style.outline = "none";
}

const displayBlock = function(place){
  place.style.display = "block";
}

const condition = function (addto) {
  if (!addto.first) {
    redBlock(fieldfirst,GetFirst);
  }
  if (!addto.last) {
    redBlock(fieldlast, Getlast);
  }
  if (!addto.email) {
    redBlock(fieldemail, Getmail);
  }
  if (!addto.pass) {
    redBlock(fieldpassword, Getpass);
  }
  if (!addto.compass) {
    redBlock(fieldconform, Getcomform);
  }

  if (!required.checked) {
    displayBlock(checked);
  }
  if (addto.pass !== addto.compass) {
    wrong.forEach((el) => (displayBlock(el)));
    Getpass.style.outline = "red solid 2px";
    Getcomform.style.outline = "red solid 2px";
  }
};


const logincondition = function (GetMail, GetPassword) {
  if (!GetMail) {
    console.log("mail");
    console.log(GetPassword);
    redBlock(loginEmailRequired, email);
    return false;
  }
  if (!GetPassword) {
    console.log("password");
    redBlock(loginPassRequired, password);
    return false;
  } else if (GetMail !== account.email) {
    displayBlock(loginEmailAcNOt);
    return false;
  } else if (GetPassword !== account.pass) {
    displayBlock(loginPassWrongpass);
    return false;
  }
  return true;
};

signIn.addEventListener("click", function () {
  const GetMail = email.value;
  const GetPassword = password.value;
  if(logincondition(GetMail,GetPassword)){
    logined.style.visibility = "visible";
    logPage.style.visibility = "hidden";
    subPage.style.visibility = "hidden";
  };
});

signUp.addEventListener("click", function () {
  logPage.classList.toggle("loginReverse");
  subPage.classList.toggle("loginNone");
  email.value = "";
  password.value = "";
});

finalsignUp.addEventListener("click", function () {
  const fnamne = GetFirst.value;
  const lnamne = Getlast.value;
  const email = Getmail.value;
  const pass = Getpass.value;
  const comform = Getcomform.value;
  const addto = new details(fnamne, lnamne, email, pass, comform);

  condition(addto);
  if (
    addto.first &&
    addto.last &&
    addto.email &&
    addto.pass &&
    addto.compass &&
    required.checked &&
    addto.pass === addto.compass
  ) {
    logPage.classList.toggle("loginNone");
    subPage.classList.toggle("login");
    addto.createAcc();
  }
});

back.addEventListener("click",function(){
  revRedBlock(fieldfirst,GetFirst);
  revRedBlock(fieldlast,Getlast);
  revRedBlock(fieldemail,Getmail);
  revRedBlock(fieldpassword, Getpass);
  revRedBlock(fieldconform, Getcomform);
  checked.style.display = "none";
  logPage.classList.toggle("loginReverse");
  subPage.classList.toggle("loginNone");
  GetFirst.value ="";
  Getlast.value = "";
  Getmail.value = "";
  Getpass.value = "";
  Getcomform.value = "";
  required.checked = false;
})