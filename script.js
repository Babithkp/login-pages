"use strict";

const email = document.querySelector(".login-page-form--email");
const password = document.querySelector(".login-page-form--password");
const signIn = document.querySelector("#signIN");
const signUp = document.querySelector("#signUP");
const logPage = document.querySelector(".login-page");
const subPage = document.querySelector(".signup-page");





const mailBlock = document.querySelector(".required-Email");
const passBlock = document.querySelector(".required-pass");
const wrongBlock = document.querySelector(".required-wrong");

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

const account = {
  first: [],
  last: [],
  email: [],
  pass: [],
}

class details {
  constructor(first, last, email, pass, compass) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.pass = pass;
  }

  comprair = function () {
    return `${this.pass} === ${this.compass} ? ${true} :${false}`;
  };

  storeData = function(){
    account.first.push(this.first);
    account.last.push(this.last);
    account.email.push(this.email);
    account.pass.push(this.pass);
    account.compass.push(this.compass);
  }
}

const condition = function (addto) {
  if (!addto.first) {
    fieldfirst.style.display = "block";
    GetFirst.style.outline = "red solid 2px";
  }
  if (!addto.last) {
    fieldlast.style.display = "block";
    Getlast.style.outline = "red solid 2px";
  }
  if (!addto.email) {
    fieldemail.style.display = "block";
    Getmail.style.outline = "red solid 2px";
  }
  if (!addto.pass) {
    fieldpassword.style.display = "block";
    Getpass.style.outline = "red solid 2px";
  }
  if (!addto.compass) {
    fieldconform.style.display = "block";
    Getcomform.style.outline = "red solid 2px";
  }

  if (!required.checked) {
    checked.style.display = "block";
  }
  if (addto.pass !== addto.compass) {
    wrong.forEach((el) => (el.style.display = "block"));
    Getpass.style.outline = "red solid 2px";
    Getcomform.style.outline = "red solid 2px";
  }
};

signIn.addEventListener("click", function () {
  const GetMail = email.value;
  const GetPassword = password.value;
  if(!GetMail){
    mailBlock.style.display = "block";
    email.style.outline = "red solid 2px";
  }
  if (!GetPassword) {
    password.style.outline = "red solid 2px";
    passBlock.style.display = "block";
  }
  else if(GetPassword !== account.pass){
    wrongBlock.style.display = "block";
  }
});

signUp.addEventListener("click", function () {
  logPage.style = "transform: rotateY(-180deg)";
  subPage.style = "transform: rotateY(0deg)";
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
    logPage.style = "transform: rotateY(0deg)";
    subPage.style = "transform: rotateY(180deg)";
    addto.storeData();
  }
});

const login = function(addto){
  console.log(addto.first);
}
