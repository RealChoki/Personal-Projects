export default function hidePlayersSettings() {
  // Hide elements with class "hide."
  document.querySelectorAll(".hide").forEach((element) => {
    element.classList.add("hidden");
  });
}
