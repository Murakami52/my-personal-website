const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = { x: canvas.width / 2, y: canvas.height / 2, size: 10 };
let foods = [];
let enemies = [];
let numOfFoods = 100;
let numOfEnemies = 5;

// Создание еды
for (let i = 0; i < numOfFoods; i++) {
    foods.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 5 + Math.random() * 5
    });
}

// Создание врагов
for (let i = 0; i < numOfEnemies; i++) {
    enemies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 15 + Math.random() * 10
    });
}

// Управление игроком
canvas.addEventListener('mousemove', function (event) {
    let rect = canvas.getBoundingClientRect();
    player.x = event.clientX - rect.left;
    player.y = event.clientY - rect.top;
});

// Основной цикл игры
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Отрисовка еды
    foods.forEach((food, index) => {
        ctx.beginPath();
        ctx.arc(food.x, food.y, food.size, 0, Math.PI * 2);
        ctx.fillStyle = 'green';
        ctx.fill();

        // Проверка на съедание еды
        if (Math.hypot(player.x - food.x, player.y - food.y) < player.size + food.size) {
            player.size += food.size / 2;
            foods.splice(index, 1);
        }
    });

    // Отрисовка врагов
    enemies.forEach((enemy) => {
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, enemy.size, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();

        // Проверка на съедание врагов
        if (Math.hypot(player.x - enemy.x, player.y - enemy.y) < player.size + enemy.size) {
            if (player.size > enemy.size) {
                player.size += enemy.size / 2;
                enemy.size = 0;
            } else {
                alert('Game Over');
                document.location.reload();
            }
        }
    });

    // Отрисовка игрока
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();

    requestAnimationFrame(gameLoop);
}

gameLoop();
