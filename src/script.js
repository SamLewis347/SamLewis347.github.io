// function that calls all the various functions that are needed to run/initialize the pages
function init(){
    navbarCollapse();
};

// javascript to toggle the navbar links on mobile
function navbarCollapse(){
    document.getElementById('collapse').addEventListener('click', () => {
        const navbarLinks = document.getElementById('navbar-links');
        
        // toggle the 'active' class to show/hide links
        navbarLinks.classList.toggle('active');
    });
};

// calling the init function to set up the page
init();