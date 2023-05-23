/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "k"];
let suits = ["♦", "♥", "♠", "♣"];

const button = document.querySelector("button");
const display = document.querySelector("#display");

const getRandomCard = () => {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const number = numbers[Math.floor(Math.random() * numbers.length)];

  let generateCard = (display.innerHTML = `<div class="topsuit"><span id="topsuit">${suit}</span></div>
  <div class="num"><span id="num">${number}</span></div>
  <div class="bottomsuit"><span id="bottomsuit">${suit}</span></div>`);

  if (suit === "♥" || suit === "♦") {
    generateCard = "<span class='red'>" + generateCard + "</span>";
  } else {
    generateCard = "<span class='black'>" + generateCard + "</span>";
  }
  return generateCard;
};

button.addEventListener("click", function() {
  const card = getRandomCard();
  display.innerHTML = card;
});
