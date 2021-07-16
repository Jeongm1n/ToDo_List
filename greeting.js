const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const second = document.querySelector(".js-second");
const infor = document.querySelector(".js-weather");
const USER_LS = "currentUser";
const SHOWING_CN = "showing";
const HIDING_CN = "hiding";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    second.classList.add(HIDING_CN);
    infor.classList.add(HIDING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    second.classList.remove(HIDING_CN);
    second.classList.add(SHOWING_CN);
    infor.classList.remove(HIDING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `My name is ${text}`;
    
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // he is not
        askForName();
    } else{
        // he is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();