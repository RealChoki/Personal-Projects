// Common functions for both players

import { moveCounterIncrementation } from "../states/moveCounterIncrementation.js";
import { incrementFirstClock } from "./player1.js";
import initializeClock from "../utils/initializeClock.js";
import getQS from "../helpers/getQS.js";

// This function handles the logic for incrementing or initializing the clocks based on the total moves.
function handleClockIncrement(incrementFn, initializeFn) {
  const totalMoves = moveCounterIncrementation(
    incrementFn === incrementFirstClock
  );

  if (totalMoves < 2) {
    initializeFn();
  } else {
    incrementFn();
  }
}

// This function initializes the clock and disables the play button.
function initializeClockAndDisableButton(
  clock,
  hoursProp,
  minutesProp,
  secondsProp
) {
  initializeClock(clock, hoursProp, minutesProp, secondsProp);
  getQS("#play-btn").disabled = true;
}

// This function swaps click event handlers between the primary and secondary players.
function swapClickHandlers(
  primaryPlayerHandler,
  secondaryPlayerHandler,
  tapField1,
  tapField2
) {
  tapField1.removeEventListener("click", primaryPlayerHandler);
  tapField2.addEventListener("click", secondaryPlayerHandler);
}

// This function stops the secondary clock and starts the primary clock.
function startClock(primaryClock, secondaryClock) {
  secondaryClock.stop();
  primaryClock.start();
}

export {
  handleClockIncrement,
  initializeClockAndDisableButton,
  swapClickHandlers,
  startClock
};
