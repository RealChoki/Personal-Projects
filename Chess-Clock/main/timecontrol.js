import getQS from "../helpers/getQS.js";
document.addEventListener("DOMContentLoaded", function () {
  // Show color selector pop-up
  getQS("#palette-btn").addEventListener("click", () => {
    getQS(".color-theme").classList.remove("hidden");
  });

  // Reload page and add user selected color
  getQS("#save-color").addEventListener("click", () => {
    const radioButtons = document.getElementsByName("radioNoLabel");
    for (let radioButton of radioButtons) {
      if (radioButton.checked) {
        localStorage.setItem("selectedColor", radioButton.value);
        getQS(".color-theme").classList.add("hidden");
        window.location.reload();
        break;
      }
    }
  });

  // Hide color selector pop-up
  getQS(".move-right").addEventListener("click", () => {
    getQS(".color-theme").classList.add("hidden");
  });

  // Fetch user selected color
  let selectedColor = localStorage.getItem("selectedColor");

  // Check if selectedColor is null and set it to the default color if it is
  if (selectedColor == null) {
    selectedColor = "#7FA44F";
    localStorage.setItem("selectedColor", selectedColor);
  }
  // Parse the hex color value into RGB components
  const r = parseInt(selectedColor.slice(1, 3), 16);
  const g = parseInt(selectedColor.slice(3, 5), 16);
  const b = parseInt(selectedColor.slice(5, 7), 16);

  // Calculate the darker color components (20% darker)
  const darkerR = Math.round(r * 0.8);
  const darkerG = Math.round(g * 0.8);
  const darkerB = Math.round(b * 0.8);
  const selectedColorDarker = `rgb(${darkerR}, ${darkerG}, ${darkerB}, 0.8)`;

  // Store darker color in LocalStorage
  localStorage.setItem("selectedColorDarker", selectedColorDarker);

  // Set the custom CSS variable with the value of 'selectedColor'
  document.documentElement.style.setProperty("--selectedColor", selectedColor);
  document.documentElement.style.setProperty(
    "--selectedColorDarker",
    selectedColorDarker
  );

  // Fetch custom times
  let customTimes = JSON.parse(localStorage.getItem("customTimes")) || [];
  let customTimesOrder =
    JSON.parse(localStorage.getItem("customTimesOrder")) || [];

  // Sort customTimes based on the customTimesOrder
  customTimes.sort((a, b) => {
    const indexA = customTimesOrder.indexOf(a.id);
    const indexB = customTimesOrder.indexOf(b.id);
    return indexA - indexB;
  });

  // Clear the existing radio buttons
  const radioOptions = getQS(".radio-options");
  radioOptions.innerHTML = "";

  // Add custom time to presets
  for (let customTime of customTimes) {
    radioOptions.innerHTML += `
      <div>
          <input type="radio" id="${customTime.id}" name="radio-group" class="custom-radio">
          <label for="${customTime.id}">${customTime.label}</label>
      </div>
    `;
  }

  // Save selected preset to playTime
  getQS("#save-time").addEventListener("click", () => {
    document.querySelectorAll(".custom-radio").forEach((radio) => {
      if (radio.checked) {
        customTimes.forEach((customtime) => {
          if (customtime.id == radio.id) {
            const playTimeObject = {
              label: customtime.label,
              id: customtime.id,
              hours: customtime.hours,
              minutes: customtime.minutes,
              seconds: customtime.second,
              incrementH: customtime.incrementH,
              incrementM: customtime.incrementM,
              incrementS: customtime.incrementS,
            };
            localStorage.setItem("playTime", JSON.stringify(playTimeObject));
            window.location.href = "../index.html";
          }
        });
      }
    });
  });
});
