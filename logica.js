"use strict";
import { problemi } from "./problemi.js";
/* Variables */
export let problems = problemi;
export const startDate = new Date("2026-03-20");
export const today = new Date();

function getWorkingDays(startDate, today) {
  let count = 0;
  let current = new Date(startDate);

  while (current <= today) {
    const day = current.getDay();

    const isWeekend = day === 0 || day === 6;

    if (!isWeekend) {
      count++;
    }

    current.setDate(current.getDate() + 1);
  }

  return count - 1;
}

export function getProblemOfTheDay(problems, startDate, today) {
  const workingDays = getWorkingDays(startDate, today);
  const index = workingDays % problems.length;
  return problems[index];
}

/* Controllo competamento*/
let isProblemSolved = false;

export function completeTask() {
  isProblemSolved = true;
}

export function canShowAlert() {
  return isProblemSolved;
}

/* Dati in local stroge */
export function setToLocalStorage() {
  const state = {
    date: today.toDateString(),
    completed: isProblemSolved,
  };

  localStorage.setItem("dailyProblemState", JSON.stringify(state));
}
export function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem("dailyProblemState"));
}

export function checkStorage() {
  const saved = loadFromLocalStorage();
  if (!saved) return false;
  return  today.toDateString() === saved.date;

}
