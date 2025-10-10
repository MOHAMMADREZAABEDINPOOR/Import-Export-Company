// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced Intersection Observer for fade animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Product Statistics Animation
function animateProductStats() {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                
                counters.forEach(counter => {
                    const originalText = counter.textContent;
                    const numberMatch = originalText.match(/(\d+)(\+?)/);
                    if (!numberMatch) return;
                    
                    const targetNumber = parseInt(numberMatch[1]);
                    const hasPlus = numberMatch[2] === '+';
                    
                    // Set initial value
                    counter.textContent = '0' + (hasPlus ? '+' : '');
                    
                    // Animate to target
                    let current = 0;
                    const increment = targetNumber / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= targetNumber) {
                            current = targetNumber;
                            clearInterval(timer);
                        }
                        counter.textContent = Math.floor(current) + (hasPlus ? '+' : '');
                    }, 30);
                });
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.product-statistics');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Category Cards Animation
function animateCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    const categoryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    categoryCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        categoryObserver.observe(card);
    });
}

// Product Cards Animation
function animateProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    const productObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        productObserver.observe(card);
    });
}

// Process Steps Animation
function animateProcessSteps() {
    const processSteps = document.querySelectorAll('.process-step');
    
    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    processSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = `all 0.6s ease ${index * 0.1}s`;
        processObserver.observe(step);
    });
}

// Quality Standards Animation
function animateQualityStandards() {
    const standards = document.querySelectorAll('.standard-item');
    
    const standardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    standards.forEach((standard, index) => {
        standard.style.opacity = '0';
        standard.style.transform = 'translateY(30px)';
        standard.style.transition = `all 0.6s ease ${index * 0.1}s`;
        standardObserver.observe(standard);
    });
}

// Product Filter Functionality
function initProductFilters() {
    const categoryLinks = document.querySelectorAll('.category-link');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetCategory = link.getAttribute('href').substring(1);
            
            // Scroll to the target section
            const targetSection = document.getElementById(targetCategory);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Product Card Hover Effects
function initProductHoverEffects() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
        });
    });
}

// Standard Item Hover Effects
function initStandardHoverEffects() {
    const standardItems = document.querySelectorAll('.standard-item');
    
    standardItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px) rotate(1deg)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
}

// Process Step Hover Effects
function initProcessHoverEffects() {
    const processSteps = document.querySelectorAll('.process-step');
    
    processSteps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            step.style.transform = 'translateY(-8px) scale(1.05)';
        });
        
        step.addEventListener('mouseleave', () => {
            step.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Category Card Click Effects
function initCategoryClickEffects() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            // Add click animation
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
        fadeObserver.observe(el);
    });
    
    // Initialize all animations
    animateProductStats();
    animateCategoryCards();
    animateProductCards();
    animateProcessSteps();
    animateQualityStandards();
    
    // Initialize interactive effects
    initProductFilters();
    initProductHoverEffects();
    initStandardHoverEffects();
    initProcessHoverEffects();
    initCategoryClickEffects();
});

// Also run immediately in case DOM is already loaded
document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
    fadeObserver.observe(el);
});

// Initialize all animations
animateProductStats();
animateCategoryCards();
animateProductCards();
animateProcessSteps();
animateQualityStandards();

// Initialize interactive effects
initProductFilters();
initProductHoverEffects();
initStandardHoverEffects();
initProcessHoverEffects();
initCategoryClickEffects();
