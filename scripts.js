function bookService() {
    alert("Redirecting to the booking page...");
    // Здесь можно добавить реальный код для перенаправления на страницу записи
}

function bookConsultation() {
    alert("Redirecting to the consultation booking page...");
    // Здесь можно добавить реальный код для перенаправления на страницу консультации
}

// Пример анимации
window.onload = () => {
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.transition = 'opacity 2s';
    setTimeout(() => {
        header.style.opacity = 1;
    }, 500);
};
