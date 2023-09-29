import getQS from "../helpers/getQS.js";
import { validateAndReplaceNaN } from "../utils/inputValidator.js";

const selectedColor = localStorage.getItem("selectedColor");
const selectedColorDarker = localStorage.getItem("selectedColorDarker");
let customTimes = JSON.parse(localStorage.getItem("customTimes")) || [];

// Set the custom CSS variable with the value of 'selectedColor'
document.documentElement.style.setProperty(
  "--selectedColorDarker2",
  selectedColorDarker
);
document.documentElement.style.setProperty("--selectedColor2", selectedColor);

const customHours = getQS("#custom-hours");
const customMinutes = getQS("#custom-minutes");
const customSeconds = getQS("#custom-seconds");

const incrementHours = getQS("#increment-hours");
const incrementMinutes = getQS("#increment-minutes");
const incrementSeconds = getQS("#increment-seconds");

// Validate inputs
customHours.addEventListener("input", validateAndReplaceNaN);
customMinutes.addEventListener("input", validateAndReplaceNaN);
customSeconds.addEventListener("input", validateAndReplaceNaN);

incrementHours.addEventListener("input", validateAndReplaceNaN);
incrementMinutes.addEventListener("input", validateAndReplaceNaN);
incrementSeconds.addEventListener("input", validateAndReplaceNaN);

// Save a Custom time
getQS("#save-custom-time").addEventListener("click", (e) => {
  const customHoursValue = customHours.value;
  const customMinutesValue = customMinutes.value;
  const customSecondsValue = customSeconds.value;

  const incrementHoursValue = incrementHours.value;
  const incrementMinutesValue = incrementMinutes.value;
  const incrementSecondsValue = incrementSeconds.value;

  const customName = getQS(".custom-time-name").value;

  let newCustomTime = "";
  if (customHoursValue > 0) {
    newCustomTime += `${customHoursValue} hour `;
  }

  if (customMinutesValue > 0) {
    newCustomTime += `${customMinutesValue} min `;
  }

  if (customSecondsValue > 0) {
    newCustomTime += `${customSecondsValue} sec `;
  }

  // Add a separator if there is an incrementation value
  if (
    incrementHoursValue > 0 ||
    incrementMinutesValue > 0 ||
    incrementSecondsValue > 0
  ) {
    newCustomTime += " | ";
  }

  if (incrementHoursValue > 0) {
    newCustomTime += `${incrementHoursValue} hour `;
  }

  if (incrementMinutesValue > 0) {
    newCustomTime += `${incrementMinutesValue} min `;
  }

  if (incrementSecondsValue > 0) {
    newCustomTime += `${incrementSecondsValue} sec `;
  }

  // Storing label and time in an object
  const customTimeObject = {
    label: customName == "" ? newCustomTime : customName,
    id: newCustomTime,
    hours: customHoursValue,
    minutes: customMinutesValue,
    second: customSecondsValue,
    incrementH: incrementHoursValue,
    incrementM: incrementMinutesValue,
    incrementS: incrementSecondsValue,
  };

  let customTimeAlreadyExists = false;
  // Checking if custom time already exists
  for (let i = 0; i < customTimes.length; i++) {
    if (customTimeObject.id == customTimes[i].id) {
      customTimeAlreadyExists = true;
      getQS(".error").classList.remove("hidden");
      getQS(".error2").classList.add("hidden");
      break;
    }
  }

  let timeInputExists = true;
  // Checking if a time input is given
  if (
    customHoursValue == 0 &&
    customMinutesValue == 0 &&
    customSecondsValue == 0
  ) {
    timeInputExists = false;
    getQS(".error2").classList.remove("hidden");
    getQS(".error").classList.add("hidden");
  }

  // Add custom time if it doesn't exist, prevent default if it does
  if (!customTimeAlreadyExists && timeInputExists) {
    customTimes.push(customTimeObject);
    localStorage.setItem("customTimes", JSON.stringify(customTimes));
    window.location.href = "timecontrol.html";
  } else {
    e.preventDefault();
  }
});
