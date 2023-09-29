// Function to disable buttons based on the value of disableGame
function toggleDisableBtns(disableGame){
    toggleAnchors(disableGame);
    toggleButtons(disableGame);
  }
  
  function toggleAnchors(disableGame) {
    const anchors = document.querySelectorAll("a");
    anchors.forEach((anchor) => {
      if (disableGame) {
        anchor.addEventListener("click", preventDefaultHandler);
      } else {
        anchor.removeEventListener("click", preventDefaultHandler);
      }
    });
  }
  
  function preventDefaultHandler(event) {
    event.preventDefault();
  }
  
  function toggleButtons(disableGame){
    const buttons = document.querySelectorAll("button");
    if (disableGame){
      buttons.forEach((button) => {
        if (!button.parentElement.classList.contains("papa")) {
          button.disabled = true;
        }
      });
    } else {
      buttons.forEach((button) => {
        button.disabled = false;
      });
    }
  }

  export default toggleDisableBtns;