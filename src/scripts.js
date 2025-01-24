// variable for the value of the current slide
let slideIndex = 0;
// getting every gallery item element and saving them into a list called slides
const slides = document.querySelectorAll('.gallery-item');
// declaring variables for the time a slide will change automatically as well as when the user presses a button
let autoSlideTimeout;
let manualTimeout;

//defining some variables for the resume modal
let modal = document.getElementById("pdfModal");
let openModalBtn = document.getElementById("openModalButton");
let closeModal = document.getElementById("closeModal");
let pdfIframe = document.getElementById("pdfIframe");

openModalBtn.onclick = function()  {
    event.preventDefault();
    modal.style.display = 'block';
    pdfIframe.src = "/assets/samuel-lewis-resume-jan-2025.pdf";
}

closeModal.onclick = function() {
    modal.style.display = "none";
    pdfIframe.src = ""; // Reset the iframe source to stop the PDF
}

window.onclick = function(event) {
    if (event.target === modal) {
            modal.style.display = "none";
            pdfIframe.src = ""; // Reset the iframe source to stop the PDF
    }
}

// function that calls all the various functions that are needed to run the portfolio specific items that require js
function init(){
    // show the first slide initially
    showSlide(slideIndex);

    // start the automatic slide change
    autoSlideTimeout = setTimeout(autoChangeSlide, 5000);
};

// function to show the current active slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// function to change the slide
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

// function to automatically change slides
function autoChangeSlide() {
    changeSlide(1);
    autoSlideTimeout = setTimeout(autoChangeSlide, 5000); // Change slide every 5 seconds
}

init();