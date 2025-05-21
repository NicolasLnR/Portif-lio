// DOM Elements
const header = document.querySelector('header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const animationElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
const contactForm = document.getElementById('contactForm');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll Events
window.addEventListener('scroll', () => {
    // Header scroll effect
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Active nav link based on scroll position
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });

    // Animation on scroll
    animationElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.75) {
            el.classList.add('active');
        }
    });
});

// Trigger animations for elements in viewport on page load
window.addEventListener('load', () => {
    animationElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.75) {
            el.classList.add('active');
        }
    });

    // Set active nav link on page load
    const hash = window.location.hash;
    if (hash) {
        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
    }
});

// Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    // You would typically send the form data to a server here
    // For now, let's just simulate a successful submission after a delay
    setTimeout(() => {
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        
        console.log('Form submitted with values:', formValues);
        
        // Reset the form
        contactForm.reset();
        
        // Show success message
        submitBtn.textContent = 'Mensagem Enviada!';
        submitBtn.style.backgroundColor = '#4CAF50';
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
        }, 3000);
    }, 1500);
});

// Project card interactions
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const image = card.querySelector('.project-image img');
        image.style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        const image = card.querySelector('.project-image img');
        image.style.transform = 'scale(1)';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initial animation for hero section
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('active');
});