// Clock-related imports
import { clock1, clock2 } from "../states/clocks.js";
import initializeTimer from "./buttons/initializeTimerBtns.js";

// Local storage and data handling
import getQS from "./helpers/getQS.js";
import initializeLocalStorage from "./utils/initializeLocalStorage.js";
import { hours, minutes, seconds, label } from "./utils/getLocalItems.js";

// Event listeners and handlers
import { addPlayingEventListener } from "./utils/playerClickHandlers.js";
import { validateAndReplaceNaN } from "./utils/inputValidator.js";
import { toggleVolume } from "./components/volumeControl.js";
import { openTimerSetting } from "./components/timerSettings.js";

// Styles and UI-related imports
import handleOrientationChange from "./utils/rotateScreen.js";

// Play Button for first player
import { firstTapClickHandler } from "./players/player1.js";

// Initialize Local Storage
initializeLocalStorage();

// Setting time mode as preset label
document.querySelectorAll(".time-mode").forEach((mode) => {
  mode.textContent = label;
  clock1.updateClock(hours, minutes, seconds);
  clock2.updateClock(hours, minutes, seconds);
});

// Execute code when the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Add click event listeners to game fields"
  addPlayingEventListener();
  initializeTimer(
    clock1,
    "cancel",
    "save",
    ".adjust-time",
    "hours",
    "minutes",
    "seconds"
  );
  initializeTimer(
    clock2,
    "cancel2",
    "save2",
    ".adjust-time2",
    "hours2",
    "minutes2",
    "seconds2"
  );
});

// Start game
getQS("#play-btn").addEventListener("click", (e) => {
  firstTapClickHandler(e);
});

// Volume control
getQS("#volume-btn").addEventListener("click", toggleVolume);

// Player Timer Setting
const settingsMap = {
  "#change-time": ".adjust-time",
  "#sec-change-time": ".adjust-time2",
};
for (const id in settingsMap) {
  getQS(id).addEventListener("click", () => {
    openTimerSetting(settingsMap[id]);
  });
}

// Add event listeners to validate input
const inputIds = [
  "#hours", "#minutes", "#seconds", "#hours2", "#minutes2", "#seconds2",
];
inputIds.forEach((id) => {
  getQS(id).addEventListener("input", validateAndReplaceNaN);
});

// Check the initial orientation and apply styles accordingly
window.addEventListener("resize", handleOrientationChange);
handleOrientationChange();
