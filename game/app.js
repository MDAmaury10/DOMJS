const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
ctx.font = "20px Serif";

const snake = [{
    x: 2,
    y: 1,
    show: function () {
        ctx.fillText('🐽', this.x * 20, this.y * 20);
    }
    },
    {
        x: 1,
        y: 1,
        xSig: 2,
        ySig: 1,
        show: function () {
            ctx.fillText('🐖', this.x * 20, this.y * 20);
        }
    },
    {
        x: 0,
        y: 1,
        ySig: 1,
        xSig: 1,
        show: function () {
            ctx.fillText('🐖', this.x * 20, this.y * 20);
        }
    }];

const food = {
    x: 0,
    y: 0,
    show: function () {
        ctx.fillText('🥕', this.x * 20, this.y * 20, 20, 20);
    },
    aparece: function () {
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.floor(Math.random() * 19) + 1;
    }
};

function checkEat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.aparece();
        snake.push({ ...snake[1] });
    }
}

function checkDeath() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function nextMove(x, y) {
    snake.forEach((item, idx) => {
        if (idx === 0) {
            item.x = x,
            item.y = y;
        } else {
            item.x = item.xSig;
            item.y = item.ySig;
            item.xSig = snake[idx - 1].x;
            item.ySig = snake[idx - 1].y;
        }
    });
}

let direction = 1;
let x = 2;
let y = 2;

food.aparece();

// Guardamos el ID del intervalo para poder detenerlo más tarde
let gameInterval = setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);

    nextMove(x, y);

    snake.forEach(i => i.show());
    food.show();

    checkEat();

    // Verificación de muerte
    if (checkDeath()) {
        alert('Perdiste');
        clearInterval(gameInterval); // Detenemos el intervalo antes de recargar
        location.reload(true); // Recargamos la página
        return;
    }

    // Mover la serpiente en la dirección seleccionada
    if (direction === 1) x++;
    else if (direction === 2) y++;
    else if (direction === 3) x--;
    else y--;

    // Validar los límites del campo de juego
    if (x > 29) x = 0;
    else if (x < 0) x = 29;
    if (y > 20) y = 1;
    if (y < 1) y = 20;

}, 200);

document.querySelector('body')
    .addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') direction = 1;
        else if (e.key === 'ArrowDown') direction = 2;
        if (e.key === 'ArrowLeft') direction = 3;
        else if (e.key === 'ArrowUp') direction = 4;
    });
