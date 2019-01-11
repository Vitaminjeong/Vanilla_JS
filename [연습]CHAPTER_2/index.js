// 2-2 / 2-3
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
//console.dir(title);
document.title = "I own you now";

// 2-4
const title = document.querySelector("#title");

function handleClick() {
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);

// 2-5
if(10 > 5) {
    console.log("hi");
} else {
    console.log("ho");
}

if(10 === 5) {
    console.log("hi");
} else {
    console.log("ho");
}

const age = prompt("How old are you");

if (age >= 18 && age <= 21) {
    console.log("you can drink but you should not");
} else if (age > 21) {
    console.log("go ahead");
} else {
    console.log("too young");
}

//2-6
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

function handleOffLine() {
    console.log("Bye Bye");
}

function handleOnLine() {
    console.log("Welcome back");
}

window.addEventListener("offLine", handleOffLine);
window.addEventListener("offLine", handleOnLine);

// 2-7
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    //if (currentClass !== CLICKED_CLASS) {
    if (hasClass) {    
        //title.className = CLICKED_CLASS;
        title.classList.remove(CLICKED_CLASS);
    } else {
        //title.className = "";
        title.classList.add(CLICKED_CLASS);
    }
    = toggle */
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();