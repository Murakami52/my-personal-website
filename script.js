// Анимация книги с помощью GSAP
document.addEventListener('DOMContentLoaded', () => {
    const book = document.createElement('div');
    book.classList.add('book');
    document.querySelector('.container').appendChild(book);

    gsap.to('.book', { 
        rotation: 360, 
        duration: 5, 
        repeat: -1, 
        ease: "power1.inOut"
    });
});
