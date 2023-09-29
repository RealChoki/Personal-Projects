// Import necessary dependencies
import getQS from "../helpers/getQS.js";
import { firstTapClickHandler } from "../players/player1.js";
import { secondTapClickHandler } from "../players/player2.js";

// Function to add click event listeners to game fields
function addPlayingEventListener() {
  getQS(".first-tapping-field").addEventListener("click", firstTapClickHandler);
  getQS(".second-tapping-field").addEventListener("click", secondTapClickHandler);
}

// Function to remove click event listeners from game fields
function removePlayingEventListener() {
  getQS(".first-tapping-field").removeEventListener("click", firstTapClickHandler);
  getQS(".second-tapping-field").removeEventListener("click", secondTapClickHandler);
}

export { addPlayingEventListener, removePlayingEventListener };
