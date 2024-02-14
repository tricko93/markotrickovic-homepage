let slideIndex = 1;

// Function to show the slides
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    // Wrap around to the last slide if at the beginning
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Wrap around to the first slide if at the end
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Function to navigate to the previous or next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Display the first slide when the page loads
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
});
