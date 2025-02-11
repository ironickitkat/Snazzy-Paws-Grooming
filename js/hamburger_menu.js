// JavaScript for the Hamburger Menu functionality
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

//JavaScript for Testimonial Carousel
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function changeTestimonial(direction) {
    currentTestimonialIndex += direction;

    // Loop through testimonials
    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = totalTestimonials - 1; // Go to the last testimonial
    } else if (currentTestimonialIndex >= totalTestimonials) {
        currentTestimonialIndex = 0; // Go back to the first testimonial
    }

    // Move the carousel
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
} 
