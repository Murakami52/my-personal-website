function bookService() {
    alert("Перенаправление на страницу записи...");
    // Здесь можно добавить реальный код для перенаправления на страницу записи
}

function bookConsultation() {
    alert("Перенаправление на страницу консультации...");
    // Здесь можно добавить реальный код для перенаправления на страницу консультации
}

window.onload = () => {
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.transition = 'opacity 2s';
    setTimeout(() => {
        header.style.opacity = 1;
    }, 500);
};
