// timerSettings.js
import { toggleDisableGame } from "../states/disableGameState.js"; // Import any necessary functions from other files
import { getDisableGame } from "../states/disableGameState.js";
import { removePlayingEventListener } from "../utils/playerClickHandlers.js";
import toggleDisableBtns from "../buttons/disableBtns.js";

export function openTimerSetting(id) {
  document.querySelector(id).classList.remove("hidden");
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  toggleDisableGame();
  toggleDisableBtns(getDisableGame());
  removePlayingEventListener();
}
