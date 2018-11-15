let myName = document.querySelector('input[name="name"]');
let myAge = document.querySelector('input[name="age"]');
let myUsername = document.querySelector('input[name="username"]');
let myPassword = document.querySelector('input[name="password"]');
let repeatPassword = document.querySelector('input[name="passwordrepeat"]');
let mySubmit = document.querySelector('button');

mySubmit.addEventListener('click', onClick);

function onClick(e) {
    let letters = /^[A-Za-z]+$/;
    if (myName.value.match(letters)) {
       console.log(myName.value);
    }
    else {
        console.log("Invalid Name!");
        e.preventDefault();
    }
    let myNumb = /^[0-9]+$/;
    if (myAge.value.match(myNumb) && myAge.value > 17 && myAge.value < 100) {
        console.log(myAge.value);   
    }
    else {
        console.log("Invalid Age!");
        e.preventDefault();
    }
    if (myUsername.value) {
        console.log(myUsername.value);
    }
    else {
        console.log("Invalid Username!");
        e.preventDefault();
    }
    let lowerCase = myPassword.value.toLowerCase();
    if (myPassword.value.length > 5 && myPassword.value !== lowerCase) {
        console.log(myPassword.value);        
    }
    else {
        console.log("Invalid Password!");
        e.preventDefault();
        
    }
    if (repeatPassword.value === myPassword.value) {
        console.log(repeatPassword.value + " password match");
        
    }
    else {
        console.log("password doesnt match the above");
        e.preventDefault();
    }
    e.preventDefault();
}