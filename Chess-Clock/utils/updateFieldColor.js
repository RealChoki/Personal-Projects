function updateFieldColor(clock, otherClock, field, otherField, selectedColor) {
  // Reset both fields' background colors.
  field.style.backgroundColor = "";
  otherField.style.backgroundColor = "";

  // Set the selected field's background color and update clock colors accordingly.
  field.style.backgroundColor = selectedColor;
  clock.style.color = "white";

  // Update the other clock's color.
  otherClock.style.color = "#323232";
}
export default updateFieldColor;