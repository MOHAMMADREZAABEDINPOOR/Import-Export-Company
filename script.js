// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

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

// Navbar background change on scroll - DISABLED
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    // Keep navbar color consistent - white background
    navbar.style.background = 'white';
    navbar.style.backdropFilter = 'none';
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !phone || !subject || !message) {
        showNotification('لطفاً تمام فیلدها را پر کنید', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('لطفاً یک ایمیل معتبر وارد کنید', 'error');
        return;
    }
    
    // Phone validation (Iranian phone numbers)
    const phoneRegex = /^(\+98|0)?9\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        showNotification('لطفاً یک شماره تلفن معتبر وارد کنید', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.', 'success');
    
    // Reset form
    this.reset();
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            margin-right: auto;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideInRight 0.3s ease-out reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    });
}

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

// Simple function to display numbers without animation
function displayNumbers() {
    const counters = document.querySelectorAll('.stat-item h3, .hero-stats .stat-number');
    
    counters.forEach(counter => {
        const originalText = counter.textContent;
        
        // Extract number and plus sign
        const numberMatch = originalText.match(/(\d+)(\+?)/);
        if (!numberMatch) return;
        
        const targetNumber = parseInt(numberMatch[1]);
        const hasPlus = numberMatch[2] === '+';
        
        // Display the final number immediately
        counter.textContent = targetNumber + (hasPlus ? '+' : '');
    });
}

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    // Display numbers immediately
    displayNumbers();
    
    // Hero section animations
    const heroElements = document.querySelectorAll('.hero .fade-in-up');
    heroElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.2}s`;
        fadeObserver.observe(el);
    });
    
    // All fade animation elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in, .scale-in');
    animatedElements.forEach(el => {
        fadeObserver.observe(el);
    });
    
    // Add staggered delays to grid items
    const gridItems = document.querySelectorAll('.products-grid .product-card, .services-grid .service-item, .certificates-grid .certificate-item, .testimonials-grid .testimonial-item');
    gridItems.forEach((el, index) => {
        el.style.transitionDelay = `${(index % 3) * 0.1}s`;
    });
    
    // Add staggered delays to stats
    const statItems = document.querySelectorAll('.about-stats .stat-item');
    statItems.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Scroll indicator functionality
const scrollIndicator = document.querySelector('.scroll-arrow');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Hide scroll indicator when scrolling down
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollIndicator = document.querySelector('.scroll-arrow');
    
    if (scrollIndicator) {
        if (currentScrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }
    
    lastScrollY = currentScrollY;
});

// Simple counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3, .hero-stats .stat-number');
    
    counters.forEach(counter => {
        const originalText = counter.textContent;
        
        // Extract number and plus sign
        const numberMatch = originalText.match(/(\d+)(\+?)/);
        if (!numberMatch) return;
        
        const targetNumber = parseInt(numberMatch[1]);
        const hasPlus = numberMatch[2] === '+';
        
        let current = 0;
        const increment = targetNumber / 50; // Slower animation
        
        const updateCounter = () => {
            if (current < targetNumber) {
                current += increment;
                counter.textContent = Math.ceil(current) + (hasPlus ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = targetNumber + (hasPlus ? '+' : '');
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Animate company statistics counters
function animateCompanyStats() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateStat = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                requestAnimationFrame(updateStat);
            } else {
                stat.textContent = target;
            }
        };
        
        updateStat();
    });
}

// Trigger company statistics animation when section is visible
const companyStatsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCompanyStats();
            companyStatsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const companyStatsSection = document.querySelector('.company-statistics');
if (companyStatsSection) {
    companyStatsObserver.observe(companyStatsSection);
}

// Animate product statistics counters
function animateProductStats() {
    const statNumbers = document.querySelectorAll('.product-statistics .stat-number[data-target]');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateStat = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                requestAnimationFrame(updateStat);
            } else {
                stat.textContent = target;
            }
        };
        
        updateStat();
    });
}

// Trigger product statistics animation when section is visible
const productStatsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProductStats();
            productStatsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const productStatsSection = document.querySelector('.product-statistics');
if (productStatsSection) {
    productStatsObserver.observe(productStatsSection);
}

// Animate service statistics counters
function animateServiceStats() {
    const statNumbers = document.querySelectorAll('.service-statistics .stat-number[data-target]');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateStat = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                requestAnimationFrame(updateStat);
            } else {
                stat.textContent = target;
            }
        };
        
        updateStat();
    });
}

// Trigger service statistics animation when section is visible
const serviceStatsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateServiceStats();
            serviceStatsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const serviceStatsSection = document.querySelector('.service-statistics');
if (serviceStatsSection) {
    serviceStatsObserver.observe(serviceStatsSection);
}

// Reduced parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.01)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Service item hover effects
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.01)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Floating cards animation enhancement
document.querySelectorAll('.floating-card').forEach((card, index) => {
    card.style.animationDelay = `-${index * 2}s`;
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Close notifications
        const notification = document.querySelector('.notification');
        if (notification) {
            notification.remove();
        }
    }
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Form input focus effects
document.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Add focused class styles
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .form-group.focused label {
        transform: translateY(-20px);
        font-size: 0.8rem;
        color: #667eea;
    }
`;
document.head.appendChild(focusStyle);

// Lazy loading for images (if any are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance optimization: Debounce scroll events - DISABLED
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll handler - DISABLED
// const debouncedScrollHandler = debounce(() => {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.style.background = 'rgba(44, 62, 80, 0.95)';
//         navbar.style.backdropFilter = 'blur(10px)';
//     } else {
//         navbar.style.background = 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)';
//         navbar.style.backdropFilter = 'none';
//     }
// }, 10);

// window.addEventListener('scroll', debouncedScrollHandler);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
        fadeObserver.observe(el);
    });
});

// Also run immediately in case DOM is already loaded
document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
    fadeObserver.observe(el);
});
