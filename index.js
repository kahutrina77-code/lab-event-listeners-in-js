// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = "#dbeafe"; // light blue
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyOutput = document.getElementById("keyPressDisplay");
  if (keyOutput) {
  keyOutput.textContent = `Key pressed: ${event.key}`;
 }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const input = document.getElementById('textInput')
  const textOutput = document.getElementById('textInputDisplay')
  if (input && textOutput) {
    textOutput.textContent = `You typed: ${input.value}`
  }
}
 

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  // Attach event listener to reset background color when the reset button is clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('click', resetBackgroundColor);

    // Attach event listener to reset background color when the reset button is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor);


  // Attach event listener to reset background color when the body is double-clicked
  document.body.addEventListener('dblclick', resetBackgroundColor);


  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress);

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput);
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};