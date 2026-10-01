// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

var slideIndex = 1;

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Prevent error if slides haven't rendered in the DOM yet
    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Initialize slideshow once the page DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

// Close contact form when clicking outside of it
document.addEventListener("click", function(event) {
    if (event.target.matches(".cancel") || (!event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.matches(".contact"))) {
        closeForm();
    }
}, false);
