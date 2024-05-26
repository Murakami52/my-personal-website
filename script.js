// Анимация книги с помощью GSAP
document.addEventListener('DOMContentLoaded', () => {
    gsap.to('.book', { 
        rotationY: 360, 
        duration: 5, 
        repeat: -1, 
        ease: "power1.inOut"
    });
});
