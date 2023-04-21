// Get the select element
const select = document.getElementById("languages");

// Add an event listener for when the value of the select element changes
select.addEventListener("change", (event) => {
  // Get the selected value
  const selectedValue = event.target.value;

  // Log the selected value to the console
  console.log(`Selected language: ${selectedValue}`);
});

function htmlToPdf() {
  var pdf = new jsPDF('p', 'pt', 'letter');
  var url = 'index.html'; // Replace with the name of your HTML file
  pdf.addHTML(document.getElementById('pdfContainer'), function() {
    pdf.save('CV_Dr-Dimitris-Mintis.pdf');
  });
}