/* ==========================================
   JavaScript Interactions for Tech Baraem (النسخة الراسخة)
   Author: Antigravity AI
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    // 2. Active Link on Scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Dynamic Typing Effect (Hero Section) - تم ضبط الأوقات ليصبح أكثر رزانة
    const typingElement = document.getElementById('typing-text');
    const words = ["الروبوتيك", "الذكاء الاصطناعي", "البرمجة", "إنترنت الأشياء", "الابتكار الرقمي"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 120;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 60; 
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150; // كتابة متزنة وهادئة
        }

        typingElement.classList.add('typing-cursor');

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2500; // وقوف طويل عند نهاية الكلمة لقراءتها بارتياح
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 600; 
        }

        setTimeout(type, typeSpeed);
    }
    
    if (typingElement) {
        type();
    }

    // 4. Static Reveal (إلغاء التحليق العنيف للعناصر عند النزول)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // إظهار الأرقام مباشرة بشكل جامد واحترافي بدون عداد سريع ومزعج للعين
                if (entry.target.classList.contains('stat-card')) {
                    const counter = entry.target.querySelector('.stat-number-counter');
                    if (counter) counter.textContent = counter.getAttribute('data-target');
                }
            }
        });
    }, { threshold: 0.05 });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});