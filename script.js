// Get the select element
const select = document.getElementById("languages");

// Add an event listener for when the value of the select element changes
select.addEventListener("change", (event) => {
  // Get the selected value
  const selectedValue = event.target.value;

  // Log the selected value to the console
  console.log(`Selected language: ${selectedValue}`);
});
// Export to PDF
const downloadBtn = document.querySelector(".download-btn");
//downloadBtn.addEventListener("click", () => {
//window.print();
//});
downloadBtn.addEventListener("click", () => {
  const doc = new jsPDF();
  const elementHTML = document.getElementById("index.html");
  doc.html(elementHTML, {
    callback: function (pdf) {
      pdf.save("CV_Dr-Dimitris-Mintis.pdf");
    },
  });
});
