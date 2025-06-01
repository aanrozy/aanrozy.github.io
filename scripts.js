// Loading screen animation
window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingOverlay = document.getElementById('loading-overlay');
        loadingOverlay.style.opacity = '0';
        
        setTimeout(function() {
            loadingOverlay.style.display = 'none';
            
            // Trigger fade-in animations after loading
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(element => {
                element.classList.add('visible');
            });
        }, 500);
    }, 1500); // Adjust this value to change how long the loading screen is visible
});

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Scroll animation
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

// Run once on page load
fadeInOnScroll();

// Then run on scroll
window.addEventListener('scroll', fadeInOnScroll);

// Particle background effect
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 1px and 3px
        const size = Math.random() * 2 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s linear infinite`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translate(0, 0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// New code for single page with slide transitions
document.addEventListener('DOMContentLoaded', function() {
    const sections = ['home', 'about', 'projects', 'contact'];
    let currentSectionIndex = 0;
    let isAnimating = false;
    const pageWrapper = document.getElementById('page-wrapper');
    const scrollIndicator = document.getElementById('scroll-indicator');
    const dots = scrollIndicator.querySelectorAll('.scroll-dot');
    
    // Set initial position
    pageWrapper.style.transform = 'translateY(0)';
    
    // Update scroll indicator
    function updateScrollIndicator(index) {
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Navigate to section
    function goToSection(index) {
        if (isAnimating || index === currentSectionIndex) return;
        
        isAnimating = true;
        currentSectionIndex = index;
        
        // Calculate the translateY value based on the section index
        const translateYValue = `-${currentSectionIndex * 100}vh`;
        pageWrapper.style.transform = `translateY(${translateYValue})`;
        
        // Update scroll indicator
        updateScrollIndicator(currentSectionIndex);
        
        // Reset animation flag after transition ends
        pageWrapper.addEventListener('transitionend', function() {
            isAnimating = false;
        }, { once: true });
    }
    
    // Handle navigation clicks
    document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            const index = sections.indexOf(section);
            if (index !== -1) {
                goToSection(index);
            }
        });
    });
    
    // Handle dot clicks
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSection(index);
        });
    });
    
    // Handle wheel events for navigation
    let wheelTimeout;
    window.addEventListener('wheel', function(e) {
        // Clear any pending wheel actions
        clearTimeout(wheelTimeout);
        
        // Check if we're at the top or bottom of the current section
        const currentSection = document.getElementById(sections[currentSectionIndex]);
        const isAtTop = currentSection.scrollTop === 0
        const isAtBottom = currentSection.scrollTop + currentSection.clientHeight >= currentSection.scrollHeight - 1;
        
        // Only allow section change if at top/bottom and not in the middle of content
        if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
            // Prevent default to avoid page scroll
            e.preventDefault();
            
            // Use timeout to debounce rapid wheel events
            wheelTimeout = setTimeout(() => {
                if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
                    // Scroll down to next section
                    goToSection(currentSectionIndex + 1);
                } else if (e.deltaY < 0 && currentSectionIndex > 0) {
                    // Scroll up to previous section
                    goToSection(currentSectionIndex - 1);
                }
            }, 100);
        }
    }, { passive: false });
    
    // Handle keyboard arrow keys
    window.addEventListener('keydown', function(e) {
        // Check if we're at the top or bottom of the current section
        const currentSection = document.getElementById(sections[currentSectionIndex]);
        const isAtTop = currentSection.scrollTop === 0;
        const isAtBottom = currentSection.scrollTop + currentSection.clientHeight >= currentSection.scrollHeight - 1;
        
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            if (isAtBottom && currentSectionIndex < sections.length - 1) {
                e.preventDefault();
                goToSection(currentSectionIndex + 1);
            }
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            if (isAtTop && currentSectionIndex > 0) {
                e.preventDefault();
                goToSection(currentSectionIndex - 1);
            }
        }
    });
    
    // Handle touch events for mobile swipe
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const currentSection = document.getElementById(sections[currentSectionIndex]);
        const isAtTop = currentSection.scrollTop === 0;
        const isAtBottom = currentSection.scrollTop + currentSection.clientHeight >= currentSection.scrollHeight - 1;
        
        // Minimum swipe distance
        if (Math.abs(touchEndY - touchStartY) < 50) return;
        
        if (touchEndY < touchStartY && isAtBottom && currentSectionIndex < sections.length - 1) {
            // Swipe up to next section
            goToSection(currentSectionIndex + 1);
        } else if (touchEndY > touchStartY && isAtTop && currentSectionIndex > 0) {
            // Swipe down to previous section
            goToSection(currentSectionIndex - 1);
        }
    }
    
    // Initialize scroll indicator
    updateScrollIndicator(0);
    
    // Make sure sections are scrollable
    document.querySelectorAll('section').forEach(section => {
        section.style.overflowY = 'auto';
    });
});