"use strict";
import * as logica from "../logica.js";

/* UI */
const getProblem = logica.getProblemOfTheDay(
  logica.problems,
  logica.startDate,
  logica.today
);

let todayDate = document.getElementById("todayDate");
let todayProblem = document.getElementById("problema");
let buttonCompleted = document.getElementById("buttonCompleted");
let answer = document.getElementById("answer");

/* ------------ */
todayDate.innerHTML = logica.today.toLocaleDateString("it-IT");
todayProblem.innerHTML = getProblem;

/* ------------ */
function checkCompleted(isSolved) {
  if (isSolved) {
    buttonCompleted.innerHTML = "Eviva!";
    buttonCompleted.setAttribute("disabled", "true");
  } else {
    buttonCompleted.removeAttribute("disabled");
  }
}

window.addEventListener("load", () =>
  checkCompleted(logica.checkStorage())
);

/* ------------ */
buttonCompleted.addEventListener("click", () => {
  logica.completeTask();
  logica.setToLocalStorage();

  if (logica.canShowAlert()) {
    alert("Hai risolto il problema");
  }

  checkCompleted(true);
});