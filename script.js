// Get the select element
const select = document.getElementById("languages");

// Add an event listener for when the value of the select element changes
select.addEventListener("change", (event) => {
  // Get the selected value
  const selectedValue = event.target.value;

  // Log the selected value to the console
  console.log(`Selected language: ${selectedValue}`);
});