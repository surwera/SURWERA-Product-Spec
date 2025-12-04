document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll('.section-header, .summary-card, .phase-card, .hardware-showcase, .ground-showcase, .feature-card, .connectivity-card, .compliance-item, .contact-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Dashboard Mockup Interactivity
    const dashboardNavItems = document.querySelectorAll('.nav-item');
    const dashboardViews = document.querySelectorAll('.view-panel');
    const viewTitle = document.querySelector('.view-title');

    dashboardNavItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update active nav item
            dashboardNavItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update active view
            const tabId = item.getAttribute('data-tab');
            dashboardViews.forEach(view => {
                view.classList.remove('active');
                if (view.id === tabId) {
                    view.classList.add('active');
                }
            });

            // Update title
            const label = item.querySelector('.nav-label').textContent;
            if (viewTitle) viewTitle.textContent = label;
        });
    });

    // Simple Drone Animation Simulation
    function animateDrones() {
        const drone1 = document.querySelector('.drone-marker:first-of-type');
        if (!drone1) return;

        let time = 0;
        setInterval(() => {
            time += 0.05;
            // Simple figure-8 movement
            const x = 30 + Math.sin(time) * 20;
            const y = 40 + Math.cos(time * 0.5) * 15;

            drone1.style.left = `${x}%`;
            drone1.style.top = `${y}%`;
        }, 100);
    }

    // Initialize animations when dashboard is visible
    const dashboard = document.querySelector('.dashboard-mockup');
    if (dashboard) {
        const dashboardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateDrones();
                    dashboardObserver.disconnect();
                }
            });
        });
        dashboardObserver.observe(dashboard);
    }
    // Parallax Effect for Hero Background
    const heroBg = document.querySelector('.hero-image');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        }
    });
});
