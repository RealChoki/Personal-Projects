// First player field

import { clock1, clock2 } from "../states/clocks.js";
import updateFieldColor from "../utils/updateFieldColor.js";

import getQS from "../helpers/getQS.js";
import { secondTapClickHandler } from "./player2.js";
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

// This click handler function handles the logic for the first player.
function firstTapClickHandler(e) {
    e.stopPropagation();
    if (e.target.parentElement.id !== "change-time") {
      clickSound.play();
      updateFieldColor(secondClock, firstClock, secondTappingField, firstTappingField, selectedColor);
      handleClockIncrement(incrementFirstClock, initializeSecondClock);
      swapClickHandlers(firstTapClickHandler, secondTapClickHandler, firstTappingField, secondTappingField);
      startClock(clock2, clock1);
    }
  }

// This function initializes the second clock.
function initializeSecondClock() {
  initializeClockAndDisableButton(clock2, "hours2", "minutes2", "seconds2");
}

// This function increments the first clock.
function incrementFirstClock() {
  clock1.increment(incrementH, incrementM, incrementS);
}

export { firstTapClickHandler, incrementFirstClock };
