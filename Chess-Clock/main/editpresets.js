import getQS from "../helpers/getQS.js";
document.addEventListener("DOMContentLoaded", function () {
  const selectedColor3 = localStorage.getItem("selectedColor");
  const selectedColorDarker3 = localStorage.getItem("selectedColorDarker");

  let customTimes = JSON.parse(localStorage.getItem("customTimes")) || [];
  let customTimesOrder =
    JSON.parse(localStorage.getItem("customTimesOrder")) || [];

  // Sort customTimes based on the customTimesOrder
  customTimes.sort((a, b) => {
    const indexA = customTimesOrder.indexOf(a.id);
    const indexB = customTimesOrder.indexOf(b.id);
    return indexA - indexB;
  });

  // Set the custom CSS variable with the value of 'selectedColor'
  document.documentElement.style.setProperty(
    "--selectedColorDarker3",
    selectedColorDarker3
  );
  document.documentElement.style.setProperty(
    "--selectedColor3",
    selectedColor3
  );

  // Hide edit name pop-up
  getQS(".move-right-other").addEventListener("click", () => {
    getQS(".color-theme").classList.add("hidden");
    window.location.reload();
  });

  // Feed all times in form-check
  const formCheck = getQS(".form-check");
  formCheck.innerHTML = "";
  for (let customtime of customTimes) {
    formCheck.innerHTML += `
            <div class="presets-box" draggable= true>
                <div class="presets-childs">
                    <input type="checkbox" value="" id="${customtime.id}" name="radio-group" class="preset-check form-check-input">
                    <label class="check-label" for="${customtime.id}">${customtime.label}</label><br>
                </div>
                <div class="presets-childs">
                    <span id="${customtime.id}" class="material-symbols-outlined edit">
                        edit
                    </span>
                    <span class="material-symbols-outlined">
                        drag_handle
                    </span>
                </div>
            </div>
        `;
  }

  $(document).on("sortupdate", "#sortable", function () {
    // Get the updated order of presets
    const updatedOrder = $("#sortable .preset-check")
      .map(function () {
        return $(this).attr("id");
      })
      .get();

    // Save the updated order to local storage
    localStorage.setItem("customTimesOrder", JSON.stringify(updatedOrder));
  });

  let counter = 0;
  // Increment and decrement selected counter
  let checkedCounter = getQS(".checked-counter");
  document.querySelectorAll(".form-check-input").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        counter++;
      } else {
        counter--;
      }
      checkedCounter.textContent = counter;
    });
  });

  // Delete a selected time from localstorage
  document.getElementById("delete-btn").addEventListener("click", () => {
    document.querySelectorAll(".form-check-input").forEach((input) => {
      if (input.checked) {
        customTimes.forEach((customtime, index) => {
          if (customtime.id == input.id) {
            customTimes.splice(index, 1);
          }
        });
      }
    });
    localStorage.setItem("customTimes", JSON.stringify(customTimes));
    window.location.reload();
  });

  // Edit the name of presets
  document.querySelectorAll(".edit").forEach((editbtn) => {
    editbtn.addEventListener("click", () => {
      // Show the pop-up
      getQS(".color-theme").classList.remove("hidden");
      // Add an event listener to the "Save" button in the modal
      getQS("#save-color").addEventListener("click", () => {
        // Check if input field is not empty
        if (getQS(".edit-name").value != "") {
          // Update the label in the customTimes array
          customTimes.forEach((customtime) => {
            if (customtime.id == editbtn.id) {
              customtime.label = getQS(".edit-name").value;
            }
          });
          // Store the updated customTimes array in localStorage
          localStorage.setItem("customTimes", JSON.stringify(customTimes));
          // Hide the pop-up and refresh the page
          getQS(".color-theme").classList.add("hidden");
          window.location.reload();
        } else {
          // Display error message
          getQS(".edit-name").style.setProperty("--placeholder-color", "red");
          getQS(".edit-name").placeholder = "Name required";
        }
      });
    });
  });
});
