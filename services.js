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

// Service Statistics Animation
function animateServiceStats() {
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

    const statsSection = document.querySelector('.service-statistics');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Service Cards Animation
function animateServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        serviceObserver.observe(card);
    });
}

// Process Timeline Animation
function animateProcessTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = index % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        timelineObserver.observe(item);
    });
}

// Advantage Cards Animation
function animateAdvantageCards() {
    const advantageCards = document.querySelectorAll('.advantage-card');
    
    const advantageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    advantageCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        advantageObserver.observe(card);
    });
}


// Marketing Process Animation
function animateMarketingProcess() {
    const processItems = document.querySelectorAll('.process-item');
    
    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    processItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        processObserver.observe(item);
    });
}

// Service Card Hover Effects
function initServiceHoverEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
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

// Advantage Card Hover Effects
function initAdvantageHoverEffects() {
    const advantageCards = document.querySelectorAll('.advantage-card');
    
    advantageCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) rotate(1deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
}


// Process Item Hover Effects
function initProcessHoverEffects() {
    const processItems = document.querySelectorAll('.process-item');
    
    processItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-8px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Timeline Marker Animation
function animateTimelineMarkers() {
    const markers = document.querySelectorAll('.timeline-marker');
    
    const markerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'pulse 2s infinite';
            }
        });
    }, { threshold: 0.5 });

    markers.forEach(marker => {
        markerObserver.observe(marker);
    });
}

// Service Link Click Effects
function initServiceLinkEffects() {
    const serviceLinks = document.querySelectorAll('.service-link');
    
    serviceLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add click animation
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 150);
            
            // Scroll to detailed service section
            const targetSection = document.querySelector('.detailed-service');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Method Card Hover Effects
function initMethodHoverEffects() {
    const methodCards = document.querySelectorAll('.method-card');
    
    methodCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Feature Item Hover Effects
function initFeatureHoverEffects() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add pulse animation for timeline markers
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(43, 108, 176, 0.7);
        }
        70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(43, 108, 176, 0);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(43, 108, 176, 0);
        }
    }
`;
document.head.appendChild(pulseStyle);

// Shipping Cards Animation
function animateShippingCards() {
    const shippingCards = document.querySelectorAll('.shipping-card');
    
    const shippingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    shippingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        shippingObserver.observe(card);
    });
}

// Legal Cards Animation
function animateLegalCards() {
    const legalCards = document.querySelectorAll('.legal-card');
    
    const legalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    legalCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        legalObserver.observe(card);
    });
}

// Marketing Process Animation
function animateMarketingProcessSteps() {
    const marketingSteps = document.querySelectorAll('.marketing-process .process-step');
    
    const marketingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    marketingSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = `all 0.6s ease ${index * 0.1}s`;
        marketingObserver.observe(step);
    });
}


// Shipping Card Hover Effects
function initShippingHoverEffects() {
    const shippingCards = document.querySelectorAll('.shipping-card');
    
    shippingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Legal Card Hover Effects
function initLegalHoverEffects() {
    const legalCards = document.querySelectorAll('.legal-card');
    
    legalCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) rotate(1deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotate(0deg)';
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
    animateServiceStats();
    animateServiceCards();
    animateProcessTimeline();
    animateAdvantageCards();
    animateMarketingProcess();
    animateTimelineMarkers();
    animateShippingCards();
    animateLegalCards();
    animateMarketingProcessSteps();
    animateShippingBenefits();
    animateShippingCoverage();
    animateShippingStatistics();
    animateShippingProcessTimeline();
    animateTestimonials();
    
    // Initialize interactive effects
    initServiceHoverEffects();
    initAdvantageHoverEffects();
    initProcessHoverEffects();
    initServiceLinkEffects();
    initMethodHoverEffects();
    initFeatureHoverEffects();
    initShippingHoverEffects();
    initLegalHoverEffects();
    initBenefitHoverEffects();
    initRegionHoverEffects();
    initShippingStatHoverEffects();
    initRouteTagHoverEffects();
    initRegionCountryHoverEffects();
    initTestimonialHoverEffects();
});

// Also run immediately in case DOM is already loaded
document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
    fadeObserver.observe(el);
});


// Shipping Benefits Animation
function animateShippingBenefits() {
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    const benefitObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    benefitCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        benefitObserver.observe(card);
    });
}

// Shipping Coverage Animation
function animateShippingCoverage() {
    const regionCards = document.querySelectorAll('.region-card');
    
    const regionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    regionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        regionObserver.observe(card);
    });
}

// Shipping Statistics Animation
function animateShippingStatistics() {
    const shippingStatsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                
                counters.forEach(counter => {
                    const targetNumber = parseInt(counter.getAttribute('data-target'));
                    
                    // Set initial value
                    counter.textContent = '0';
                    
                    // Animate to target
                    let current = 0;
                    const increment = targetNumber / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= targetNumber) {
                            current = targetNumber;
                            clearInterval(timer);
                        }
                        counter.textContent = Math.floor(current);
                    }, 30);
                });
                
                shippingStatsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const shippingStatsSection = document.querySelector('.shipping-statistics');
    if (shippingStatsSection) {
        shippingStatsObserver.observe(shippingStatsSection);
    }
}

// Shipping Process Timeline Animation
function animateShippingProcessTimeline() {
    const timelineItems = document.querySelectorAll('.shipping-process-timeline .timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = index % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        timelineObserver.observe(item);
    });
}

// Benefit Card Hover Effects
function initBenefitHoverEffects() {
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Region Card Hover Effects
function initRegionHoverEffects() {
    const regionCards = document.querySelectorAll('.region-card');
    
    regionCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) rotate(1deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
}

// Shipping Stat Item Hover Effects
function initShippingStatHoverEffects() {
    const shippingStatItems = document.querySelectorAll('.shipping-stat-item');
    
    shippingStatItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Route Tag Hover Effects
function initRouteTagHoverEffects() {
    const routeTags = document.querySelectorAll('.route-tag');
    
    routeTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.1) translateY(-2px)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1) translateY(0)';
        });
    });
}

// Region Country Hover Effects
function initRegionCountryHoverEffects() {
    const regionCountries = document.querySelectorAll('.region-countries span');
    
    regionCountries.forEach(country => {
        country.addEventListener('mouseenter', () => {
            country.style.transform = 'scale(1.1) translateY(-2px)';
        });
        
        country.addEventListener('mouseleave', () => {
            country.style.transform = 'scale(1) translateY(0)';
        });
    });
}


// Testimonials Animation
function animateTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        testimonialObserver.observe(card);
    });
}


// Testimonial Card Hover Effects
function initTestimonialHoverEffects() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}


// Initialize all animations
animateServiceStats();
animateServiceCards();
animateProcessTimeline();
animateAdvantageCards();
animateMarketingProcess();
animateTimelineMarkers();
animateShippingCards();
animateLegalCards();
animateMarketingProcessSteps();
animateShippingBenefits();
animateShippingCoverage();
animateShippingStatistics();
animateShippingProcessTimeline();
animateTestimonials();

// Initialize interactive effects
initServiceHoverEffects();
initAdvantageHoverEffects();
initProcessHoverEffects();
initServiceLinkEffects();
initMethodHoverEffects();
initFeatureHoverEffects();
initShippingHoverEffects();
initLegalHoverEffects();
initBenefitHoverEffects();
initRegionHoverEffects();
initShippingStatHoverEffects();
initRouteTagHoverEffects();
initRegionCountryHoverEffects();
initTestimonialHoverEffects();
