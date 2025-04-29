/**
 * Bitwise Portfolio Website - Main JavaScript File
 * This file handles all interactive functionality for the website
 */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Initialize Projects Slider
    new Swiper(".projects-slider", {
        // Parameters for multiple slide view
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false, // Disable loop as requested
        grabCursor: true,
        centeredSlides: false, // Disable centering for multiple slides
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // Pagination
        pagination: {
            el: ".projects-pagination",
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".projects-button-next",
            prevEl: ".projects-button-prev",
        },
        // Adjust slidesPerView for larger screens
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    // Initialize Reviews Slider
    new Swiper(".reviews-slider", {
        // Parameters for single slide view
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false, // Disable loop as requested
        grabCursor: true,
        centeredSlides: false, // Center the single slide
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        // Pagination
        pagination: {
            el: ".reviews-pagination",
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".reviews-button-next",
            prevEl: ".reviews-button-prev",
        },
        // Ensure only one slide is visible across all breakpoints
        breakpoints: {
            // when window width is >= 1px (effectively always)
            // 1: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    // Initialize Services Slider (New)
    const servicesSwiper = new Swiper(".services-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false, // Disable loop
        grabCursor: true,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".services-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".services-button-next",
            prevEl: ".services-button-prev",
        },
        breakpoints: {
            // Show more slides on larger screens if desired
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false, // Don't center when multiple slides
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: false,
            }
        }
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener("click", function() {
            navLinks.classList.toggle("active");
        });
    }

    // Close mobile menu when a link is clicked
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(item => {
        item.addEventListener("click", function() {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get the height of the fixed header
                const headerHeight = document.getElementById("header").offsetHeight;
                
                // Calculate the position to scroll to (element position - header height)
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Smooth scroll for scroll-down arrow
    const scrollDownArrow = document.getElementById("scroll-down");
    if (scrollDownArrow) {
        scrollDownArrow.addEventListener("click", function() {
            const visionSection = document.getElementById("vision");
            if (visionSection) {
                const headerHeight = document.getElementById("header").offsetHeight;
                const targetPosition = visionSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    }

    // Header scroll effect - add shadow and change background opacity on scroll
    const header = document.getElementById("header");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
            header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        } else {
            header.style.boxShadow = "none";
            header.style.backgroundColor = "rgba(255, 255, 255, 1)";
        }
    });

});
