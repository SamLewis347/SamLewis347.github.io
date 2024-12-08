// variable for the value of the current slide
let slideIndex = 0;
// getting every gallery item element and saving them into a list called slides
const slides = document.querySelectorAll('.gallery-item');
// declaring variables for the time a slide will change automatically as well as when the user presses a button
let autoSlideTimeout;
let manualTimeout;

// function that calls all the various functions that are needed to run the portfolio specific items that require js
function init(){
    // show the first slide initially
    showSlide(slideIndex);

    // start the automatic slide change
    autoSlideTimeout = setTimeout(autoChangeSlide, 5000);

    // add event listeners two the two buttons
    addButtonEventListeners();

};

// function to add event listeners to the gallery buttons
function addButtonEventListeners(){
    document.querySelector('.prev').addEventListener('click', () => manualChangeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => manualChangeSlide(1));
}

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

// function to handle manual slide change and stop auto cycling
function manualChangeSlide(n) {
    changeSlide(n);
    clearTimeout(autoSlideTimeout);
    clearTimeout(manualTimeout);

    // restart auto slide change after 10 seconds
    manualTimeout = setTimeout(() => {
        autoSlideTimeout = setTimeout(autoChangeSlide, 5000);
    }, 10000);
}

init();