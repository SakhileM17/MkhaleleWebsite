/* -------------------------------------------------------------
Website Name    : Helman Mkhalele Website 2024
Author          : Sakhile Mkhalele
Date            : Feb 2024

script
-------------------------------------------------------------- */


/* Toggles hamburger menu when opened or closed*/
function toggleMenu() {

    const menuLinks = document.querySelector('.menu-links');
    const closeIcon = document.querySelector('.close-icon');

    menuLinks.classList.toggle('show');
}

/*
To show the current page in the nav bar
*/
// JavaScript to highlight active page in the navigation menu
    document.addEventListener('DOMContentLoaded', function() {
        var currentPage = window.location.pathname.split('/').pop(); // Get the current page filename
        var links = document.querySelectorAll('.menu-links a'); // Select all links in the navigation menu

        // Loop through each link and compare its href attribute to the current page filename
        links.forEach(function(link) {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active'); // Add the 'active' class to the link if it matches the current page
            }
        });
    });

/*------------------------------------- 
                Slide show 
-----------------------------------------*/

let slideIndex = 0;
showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Increment slideIndex
    slideIndex++;
    
    // Reset slideIndex if it exceeds the number of slides
    if (slideIndex > slides.length) { 
        slideIndex = 1;
    }

    if (slideIndex == 2) { // Remember JavaScript uses zero-based indexing
        
        dots[2].style.backgroundColor = '#92C1DB';

    }
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Update pagination dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }
    dots[slideIndex - 1].classList.add("active-dot");
    
    // Call showSlides() again after 5 seconds
    setTimeout(showSlides, 10000);
}






