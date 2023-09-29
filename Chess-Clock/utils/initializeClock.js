import hidePlayersSettings from "./hidePlayerSetting.js";

const playTime = JSON.parse(localStorage.getItem("playTime"));
const hours = parseInt(playTime.hours);
const minutes = parseInt(playTime.minutes);
const seconds = parseInt(playTime.seconds);

export default function initializeClock(clock, hoursId, minutesId, secondsId){
    // Use input values if available; otherwise, use local defaults.
    const hoursInput = parseInt(document.getElementById(hoursId).value, 10);
    let minutesInput = parseInt(document.getElementById(minutesId).value, 10);
    const secondsInput = parseInt(document.getElementById(secondsId).value, 10);
  
    // Set the clock values based on input, with a fallback for all zeros.
    if (!hoursInput && !minutesInput && !secondsInput) {
      clock.setClock(hours, minutes, seconds);
    } else {
      if (!hoursInput && !minutesInput && !secondsInput) {
        minutesInput = 10;
      }
      clock.setClock(hoursInput, minutesInput, secondsInput);
    }
    hidePlayersSettings();
}