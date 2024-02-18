"use strict";
// Initialize variables
const numberElement = document.querySelector(".number");

// Update the color of the number bases on its value
const updateNumberColor = () => {
  const numberValue = parseInt(numberElement.textContent);

  if (numberValue < 0) {
    numberElement.style.color = "red";
  } else if (numberValue > 0) {
    numberElement.style.color = "green";
  } else {
    numberElement.style.color = "black";
  }
};

// Decrease the number
document.querySelector(".btn-decrease").addEventListener("click", () => {
  numberElement.textContent--;
  updateNumberColor();
});

// Reset the numberElement
document.querySelector(".btn-reset").addEventListener("click", () => {
  numberElement.textContent = 0;
  updateNumberColor();
});

// Increase the number
document.querySelector(".btn-increase").addEventListener("click", () => {
  numberElement.textContent++;
  updateNumberColor();
});
