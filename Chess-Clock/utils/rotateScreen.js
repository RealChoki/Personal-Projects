// Function to apply vertical styles by adding a CSS file to the HTML document
function applyVerticalStyles() {
  // Create a link element for the CSS file
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "vertical.css";

  // Add the link element to the head of the HTML document
  document.head.appendChild(link);
}

// Function to remove vertical styles by removing the corresponding CSS file link
function removeVerticalStyles() {
  // Remove the link element if it exists
  var existingLink = document.querySelector("link[href='vertical.css']");
  if (existingLink) {
    existingLink.parentNode.removeChild(existingLink);
  }
}

// Function to apply horizontal styles by adding a CSS file to the HTML document
function applyHorizontalStyles() {
  // Create a link element for the CSS file
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "horizontal.css";

  // Add the link element to the head of the HTML document
  document.head.appendChild(link);
}

// Function to remove horizontal styles by removing the corresponding CSS file link
function removeHorizontalStyles() {
  // Remove the link element if it exists
  var existingLink = document.querySelector("link[href='horizontal.css']");
  if (existingLink) {
    existingLink.parentNode.removeChild(existingLink);
  }
}

// Function to handle changes in orientation and apply appropriate styles
function handleOrientationChange() {
  if (window.innerWidth > window.innerHeight) {
    // If the window is in a horizontal orientation, apply horizontal styles and remove vertical styles
    applyHorizontalStyles();
    removeVerticalStyles();
  } else {
    // If the window is in a vertical orientation, apply vertical styles and remove horizontal styles
    applyVerticalStyles();
    removeHorizontalStyles();
  }
}

export default handleOrientationChange;
