export function validateAndReplaceNaN(event) {
  const inputValue = event.target.value;

  // Use a regular expression to allow only two digits (00 to 99)
  const validValue = inputValue.replace(/\D/g, "").substring(0, 2);

  // Replace NaN with 0
  event.target.value = validValue || "00";
}
