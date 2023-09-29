import { presets } from "/data/presets.js";
export default function initializeLocalStorage() {
  // Initialize presets
  if (!localStorage.getItem("customTimes")) {
    // Saving presets in local storage
    localStorage.setItem("customTimes", JSON.stringify(presets));
  }

  if (!localStorage.getItem("playTime")) {
    // Creating an object with the desired properties
    const playTimeObject = {
      label: "10 min",
      id: "10 min",
      hours: 0,
      minutes: 10,
      seconds: 0,
      incrementH: 0,
      incrementM: 0,
      incrementS: 0,
    };
    // Serializing the object to JSON and saving it in localStorage
    localStorage.setItem("playTime", JSON.stringify(playTimeObject));
  }
}
