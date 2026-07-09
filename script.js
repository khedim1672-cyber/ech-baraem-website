/* ==========================================
   تحديثات التفاعل والتحسين البصري (Tech Baraem)
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // [البرامج السابقة موجودة هنا ...]

    // حل مشكلة تكرار صورة جمعية براعم التكنولوجيا تلقائياً
    // يقوم الكود بفحص الصور، وإذا كانت مكررة أو فارغة، يعوضها بصور تكنولوجية جذابة ومتنوعة
    const galleryImages = document.querySelectorAll('.gallery-img');
    const techPlaceholders = [
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80', // روبوتات
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80', // برمجة
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', // إلكترونيات
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'  // تكنولوجيا حديثة
    ];

    let usedSrcs = [];

    galleryImages.forEach((img, index) => {
        let currentSrc = img.getAttribute('src');
        
        // إذا كانت الصورة مكررة أو تشير إلى نفس اللوجو/الصورة الأساسية في المعرض
        if (usedSrcs.includes(currentSrc) || !currentSrc || currentSrc.includes('logo')) {
            // استبدالها بصورة فريدة من القائمة التكنولوجية
            const placeholderIndex = index % techPlaceholders.length;
            img.src = techPlaceholders[placeholderIndex];
        } else {
            usedSrcs.push(currentSrc);
        }
    });

    // إضافة تأثير ظهور تدريجي مريح ورائع لكروت الاتصال عند التمرير
    const contactCards = document.querySelectorAll('.contact-btn');
    contactCards.forEach((card, idx) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        card.style.transition = `all 0.4s ease ${idx * 0.1}s`; // ظهور تتابعي احترافي
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(card);
    });
});