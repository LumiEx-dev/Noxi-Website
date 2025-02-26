document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMobile = document.getElementById('nav-mobile');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenuToggle && navMobile) {
        mobileMenuToggle.addEventListener('click', function() {
            navMobile.classList.toggle('open');
            
            // Change menu icon based on state
            if (menuIcon) {
                if (navMobile.classList.contains('open')) {
                    menuIcon.src = 'assets/close.svg'; // You'll need to create this icon
                } else {
                    menuIcon.src = 'assets/menu-burger.svg';
                }
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMobile && navMobile.classList.contains('open')) {
            if (!event.target.closest('.header-container') && !event.target.closest('.nav-mobile')) {
                navMobile.classList.remove('open');
                if (menuIcon) {
                    menuIcon.src = 'assets/menu-burger.svg';
                }
            }
        }
    });
    
    // User icon functionality - placeholder for future implementation
    const userIcon = document.getElementById('user-icon');
    if (userIcon) {
        userIcon.addEventListener('click', function() {
            // Placeholder for user account functionality
            alert('User account feature coming soon!');
        });
    }
    
    // Add animation to content blocks on scroll
    const contentBlocks = document.querySelectorAll('.content-block, .product-card');
    if (contentBlocks.length > 0) {
        // Simple animation on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        contentBlocks.forEach(block => {
            block.style.opacity = '0';
            block.style.transform = 'translateY(20px)';
            block.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(block);
        });
    }
});