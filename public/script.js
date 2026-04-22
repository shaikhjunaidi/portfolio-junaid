// Initialize Animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- Preloader ---
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            // Start Hero Animations after preloader is done
            initHeroAnimations();
        }, 600);
    }, 500);

    // --- GSAP ScrollTrigger Init ---
    gsap.registerPlugin(ScrollTrigger);

    // --- Hero Intro Animation ---
    function initHeroAnimations() {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo('.gs-reveal', 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
        )
        .fromTo('.profile-glow', 
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 0.3, duration: 2, ease: 'power2.out' }, "-=1"
        )
        .fromTo('.profile-img',
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.5)' }, "-=1.5"
        );
    }

    // --- Scroll Animations (Apple-like Fade & Slide) ---
    const sections = gsap.utils.toArray('.section-reveal');
    sections.forEach(section => {
        gsap.fromTo(section,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Skill bar fill animation
    const skillBars = gsap.utils.toArray('.fill');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        gsap.to(bar, {
            width: width,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top 90%',
            }
        });
    });

    // --- Hero Image Parallax (Scrub) ---
    gsap.to('#hero-img-wrapper', {
        y: 100,
        scale: 0.9,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // --- Navbar Blur/Shrink Effect on Scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'var(--nav-bg)';
            // Make bottom border visible
            navbar.style.borderBottom = '1px solid var(--glass-border)';
        } else {
            // Keep transparent at top
            navbar.style.background = 'transparent';
            navbar.style.borderBottom = '1px solid transparent';
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- Theme Toggle Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    // --- Floating Label & Form Logic ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right:8px;"></i> Sending...';
        submitBtn.disabled = true;
        
        formStatus.textContent = '';
        formStatus.className = 'form-status-msg';
        
        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                formStatus.textContent = data.success || 'Message sent successfully.';
                formStatus.classList.add('success-text');
                contactForm.reset();
            } else {
                formStatus.textContent = data.error || 'Failed to send message.';
                formStatus.classList.add('error-text');
            }
        } catch (error) {
            formStatus.textContent = 'Network error. Please try again later.';
            formStatus.classList.add('error-text');
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });

    // --- Back to Top Button Logic ---
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
    }
});
