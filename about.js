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

// Company Statistics Animation
function animateCompanyStats() {
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

    const statsSection = document.querySelector('.company-statistics');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Timeline Animation
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-year');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.6s ease';
        timelineObserver.observe(item);
    });
}

// Team Member Hover Effects
function initTeamEffects() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        member.addEventListener('mouseleave', () => {
            member.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Value Cards Animation
function animateValueCards() {
    const valueCards = document.querySelectorAll('.value-card');
    
    const valueObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    valueCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        valueObserver.observe(card);
    });
}

// Achievement Cards Animation
function animateAchievements() {
    const achievements = document.querySelectorAll('.achievement-item');
    
    const achievementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    achievements.forEach((achievement, index) => {
        achievement.style.opacity = '0';
        achievement.style.transform = 'translateY(30px)';
        achievement.style.transition = `all 0.6s ease ${index * 0.1}s`;
        achievementObserver.observe(achievement);
    });
}

// Mission Cards Animation
function animateMissionCards() {
    const missionCards = document.querySelectorAll('.mission-card');
    
    const missionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    missionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        missionObserver.observe(card);
    });
}

// Certificate Hover Effects
function initCertificateEffects() {
    const certificates = document.querySelectorAll('.certificate-item');
    
    certificates.forEach(cert => {
        cert.addEventListener('mouseenter', () => {
            cert.style.transform = 'translateY(-5px) rotate(2deg)';
        });
        
        cert.addEventListener('mouseleave', () => {
            cert.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
}

// CTA Section Animation
function animateCTASection() {
    const ctaFeatures = document.querySelectorAll('.cta-features .feature-item');
    
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    ctaFeatures.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(30px)';
        feature.style.transition = `all 0.6s ease ${index * 0.1}s`;
        ctaObserver.observe(feature);
    });
}

// CTA Feature Hover Effects
function initCTAFeatureEffects() {
    const ctaFeatures = document.querySelectorAll('.cta-features .feature-item');
    
    ctaFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'translateY(0) scale(1)';
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
    animateCompanyStats();
    animateTimeline();
    initTeamEffects();
    animateValueCards();
    animateAchievements();
    animateMissionCards();
    initCertificateEffects();
    animateCTASection();
    initCTAFeatureEffects();
});

// Also run immediately in case DOM is already loaded
document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
    fadeObserver.observe(el);
});

// Initialize all animations
animateCompanyStats();
animateTimeline();
initTeamEffects();
animateValueCards();
animateAchievements();
animateMissionCards();
initCertificateEffects();
animateCTASection();
initCTAFeatureEffects();
