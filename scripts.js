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

    createFallingNuts();
};

function createFallingNuts() {
    const nutCount = 20;
    const fallingNutsContainer = document.querySelector('.falling-nuts');

    for (let i = 0; i < nutCount; i++) {
        const nut = document.createElement('div');
        nut.classList.add(i % 2 === 0 ? 'nut' : 'bolt');
        nut.style.left = `${Math.random() * 100}vw`;
        nut.style.animationDuration = `${Math.random() * 2 + 3}s`;
        fallingNutsContainer.appendChild(nut);
    }
}
