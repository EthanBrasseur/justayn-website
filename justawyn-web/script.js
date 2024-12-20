document.addEventListener("DOMContentLoaded", () => {
    // Typewriter Effect for Tagline
    const taglineElement = document.querySelector('.tagline');
    const taglineText = "The Meme Token on Solana";
    let charIndex = 0;
    
    function typeTagline() {
        if (charIndex < taglineText.length) {
            taglineElement.textContent += taglineText.charAt(charIndex);
            charIndex++;
            setTimeout(typeTagline, 70);
        }
    }
    taglineElement.textContent = "";
    typeTagline();

    // Fade-in Animation on Scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('before-fade');
        observer.observe(section);
    });

    // Interactive Hero Image
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');

    if (hero && heroImage) {
        hero.addEventListener('mousemove', (e) => {
            // Get bounding box of hero section
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top; 

            // Calculate rotation based on mouse position
            const rotateX = ((y / rect.height) - 0.5) * 10;  // tilt range
            const rotateY = ((x / rect.width) - 0.5) * 10;

            heroImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        hero.addEventListener('mouseleave', () => {
            // Reset the image rotation
            heroImage.style.transform = `rotateX(0deg) rotateY(0deg)`;
        });
    }
});
