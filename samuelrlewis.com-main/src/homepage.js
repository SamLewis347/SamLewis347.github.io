// function that calls all the various functions that are needed to run the homepage specific items that require js
function init(){
    toggleAdditionalContent();
};

function toggleAdditionalContent(){
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', function() {
            const entry = this.closest('.timeline-entry');  // find the parent timeline entry
            const additionalContent = entry.querySelector('.additionalContent');  // find the additional content
            
            // toggle the content visibility
            if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
                additionalContent.style.display = 'block';  // show the content
                this.textContent = 'Hide Additional Content';  // change button text to hide
            } else {
                additionalContent.style.display = 'none';  // hide the content
                this.textContent = 'Show Additional Content';  // change button text to show
            }
        });
    });
};

init();