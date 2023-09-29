// Second player field

import { clock1, clock2 } from "../states/clocks.js";
import updateFieldColor from "../utils/updateFieldColor.js";

import getQS from "../helpers/getQS.js";
import { firstTapClickHandler } from "./player1.js";
import {
  handleClockIncrement,
  initializeClockAndDisableButton,
  swapClickHandlers,
  startClock,
} from "./commonFunctions.js";
import { incrementH, incrementM, incrementS } from "../utils/getLocalItems.js";

const clickSound = getQS("#click-sound");

const firstClock = getQS("#clock");
const secondClock = getQS("#clock2");
const firstTappingField = getQS(".first-tapping-field");
const secondTappingField = getQS(".second-tapping-field");

const selectedColor = localStorage.getItem("selectedColor") || "#7FA44F";

// This click handler function handles the logic for the second player.
function secondTapClickHandler(e) {
    e.stopPropagation();
    if (e.target.parentElement.id !== "sec-change-time") {
      clickSound.play();
      updateFieldColor(firstClock, secondClock, firstTappingField, secondTappingField, selectedColor);
      handleClockIncrement(incrementSecondClock, initializeFirstClock);
      swapClickHandlers(secondTapClickHandler, firstTapClickHandler, secondTappingField, firstTappingField);
      startClock(clock1, clock2);
    }
  }

// This function initializes the first clock.
function initializeFirstClock() {
  initializeClockAndDisableButton(clock1, "hours", "minutes", "seconds");
}

// This function increments the second clock.
function incrementSecondClock() {
  clock2.increment(incrementH, incrementM, incrementS);
}

export { secondTapClickHandler };
