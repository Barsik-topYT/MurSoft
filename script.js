// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            target.style.transition = 'all 0.3s';
            target.style.boxShadow = '0 0 0 3px var(--accent)';
            setTimeout(() => {
                target.style.boxShadow = '';
            }, 1000);
        }
    });
});

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const THEME_KEY = 'mursoft-theme';

function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
}

function toggleTheme() {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    setTheme(next);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        toggleTheme();
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
}

// Language switch
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.documentElement.lang = lang;
        // Здесь можно добавить логику перевода текстов
    });
});

// Header scroll effect
function updateHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    header.classList.toggle('header-scrolled', window.scrollY > 50);
}

window.addEventListener('scroll', updateHeaderScroll);
updateHeaderScroll();

// Particles Animation
const canvas = document.getElementById('particlesCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    
    function createParticles() {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    function animateParticles() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        particles = [];
        createParticles();
    });
    
    resizeCanvas();
    createParticles();
    animateParticles();
}

// Typing animation
const typingElement = document.getElementById('typingText');
if (typingElement) {
    const originalText = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.whiteSpace = 'normal';
    typingElement.style.width = 'auto';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            typingElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    typeWriter();
}

// Tilt effect for cards
document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Scroll animations with counter
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            if (entry.target.classList.contains('stat-item') && entry.target.dataset.count) {
                const counter = entry.target.querySelector('.stat-number');
                const targetCount = parseInt(entry.target.dataset.count);
                let currentCount = 0;
                const duration = 2000;
                const increment = targetCount / (duration / 16);
                
                const updateCounter = () => {
                    currentCount += increment;
                    if (currentCount < targetCount) {
                        counter.textContent = Math.floor(currentCount) + (targetCount === 100 ? '%' : '');
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = targetCount + (targetCount === 100 ? '%' : '');
                    }
                };
                updateCounter();
            }
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.program-card, .stat-item, .contact-item, .about-text');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
    
    const programsGrid = document.querySelector('.programs-grid');
    if (programsGrid) observer.observe(programsGrid);
    
    createShootingStars();
});

// Shooting stars
function createShootingStars() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    setInterval(() => {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.left = Math.random() * 80 + 10 + '%';
        star.style.top = '-10px';
        star.style.animationDuration = Math.random() * 2 + 2 + 's';
        star.style.animationDelay = '0s';
        hero.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 3000);
    }, 3000);
}

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('aria-label', 'Наверх');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < 600) {
        hero.style.backgroundPosition = `50% ${scrolled * 0.3}px`;
    }
});

// Ripple effect
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.transition = 'transform 0.5s, opacity 0.5s';
        ripple.style.pointerEvents = 'none';
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.style.transform = 'scale(1)';
            ripple.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            ripple.remove();
        }, 500);
    });
});