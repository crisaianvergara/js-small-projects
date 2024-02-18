"use strict";

const splitColorName = (colorName) => {
  const result = [];
  let currentWord = "";

  for (let i = 0; i < colorName.length; i++) {
    // Check if the current character is uppercase
    if (colorName[i] === colorName[i].toUpperCase() && currentWord !== "") {
      result.push(currentWord);
      currentWord = "";
    }
    currentWord += colorName[i];
  }

  // Push the last word
  if (currentWord !== "") {
    result.push(currentWord);
  }

  return result.join(" ");
};

// Get random index
const getRandomIndex = (colors) => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return randomIndex;
};

// Set color
const setColor = () => {
  const randomIndex = getRandomIndex(colors);
  const colorName = colors[randomIndex].name;
  const colorHex = colors[randomIndex].hex;

  colorText.textContent = splitColorName(colorName);
  colorText.style.color = "#" + colorHex;
  container.style.backgroundColor = "#" + colorHex;
};

// Fetch colors from API
const getColors = async () => {
  const response = await fetch("https://www.csscolorsapi.com/api/colors");

  if (!response.ok) {
    throw new Error("Failed to fetch colors.");
  }

  const data = await response.json();
  return data;
};

// Fetch colors and set initial color
const fetchColors = () => {
  getColors()
    .then((data) => {
      colors = data.colors;
      setColor();
    })
    .catch((error) => {
      console.error("Error fetching colors: ", error.message);
    });
};

// Initialize
const init = () => {
  fetchColors();
};

// Initialize variables
let colors;
const colorText = document.querySelector(".color");
const container = document.body;

// Initialize on page load
init();

// Event listener for button click
document.querySelector(".click-me").addEventListener("click", () => {
  fetchColors();
});
