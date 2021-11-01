// DOM Events Exercise
// 1a
const button1= document.querySelector('#one');
// 1b-example of an anonymous declaration function
button1.onclick = function () {
alert ("Cool! You can hear/understand a hummingbird and ants");
}
// 2a-setting up an event listener
const h3 = document.querySelector ('h3');
// 2b
h3.addEventListener('mouseenter',() => {
    alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one")
});
// 3a -selecting form element
const form = document.querySelector ('form');
// 3b
form.addEventListener(`submit`,() => {
    alert (`${form.elements.quote.value}`);
});

// BONUS completed along with class

// 4a
const darkMode = document.querySelector(`#dm`);
// 4b-set up dark mode on entire page when (darkmode)button clicked
const everything = document.querySelectorAll(`*`);
darkMode.addEventListener(`click`, ()=> {
    for (elements of everything){
        elements.classList.toggle (`dark-mode`;)
    }
});

// 5a
const reality = document.querySelector(`#reality`);
// 5b
let clickCount = 0; 
reality.addEventListener(`click`, () => {
    clickCount ++;
    if (clickCount< 3){
        alert ("You have successfully moved to another reality");
    } else if (clickCount===3){
        alert ("OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!");
    }
});



