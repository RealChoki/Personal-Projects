// Function to handle clocks input events (cancel and save)
import { getDisableGame, toggleDisableGame } from "../states/disableGameState.js";
import { addPlayingEventListener } from '../utils/playerClickHandlers.js'
import toggleDisableBtns from "./disableBtns.js";

function initializeTimer(
  clock,
  cancel,
  save,
  timerSetting,
  hours,
  minutes,
  seconds
) {
  const cancelBtn = document.getElementById(cancel);
  const saveBtn = document.getElementById(save);

  function resetTimerSetting() {
    document.querySelector(timerSetting).classList.add("hidden");
    document.body.style.backgroundColor = "";
    toggleDisableGame()
    addPlayingEventListener();
    toggleDisableBtns(getDisableGame());
  }

  function saveTimerSetting() {
    const hoursInput = parseInt(document.getElementById(hours).value, 10);
    let minutesInput = parseInt(document.getElementById(minutes).value, 10);
    const secondsInput = parseInt(document.getElementById(seconds).value, 10);

    resetTimerSetting();

    // Default values to 10:00 if user types 0 0 0 in
    if (hoursInput == 0 && minutesInput == 0 && secondsInput == 0) {
      minutesInput = 10;
    }

    clock.updateClock(hoursInput, minutesInput, secondsInput);
  }

  // Add event listeners
  cancelBtn.addEventListener("click", resetTimerSetting);
  saveBtn.addEventListener("click", saveTimerSetting);
}

export default initializeTimer;
