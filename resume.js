// Get the modal
var modal = document.getElementById("pdfModal");

// Get the link that opens the modal
var openModalLink = document.getElementById("openModalLink");

// Get the <span> element that closes the modal
var closeModal = document.getElementById("closeModal");

// Get the iframe element
var pdfIframe = document.getElementById("pdfIframe");

// When the user clicks on the link, open the modal
openModalLink.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
    pdfIframe.src = "/sam-lewis-resume.pdf"; // Specify the path to your PDF
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
    pdfIframe.src = ""; // Reset the iframe source to stop the PDF
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
            modal.style.display = "none";
            pdfIframe.src = ""; // Reset the iframe source to stop the PDF
    }
}
