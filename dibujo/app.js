const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

// Dibujo del rectángulo verde
ctx.fillStyle = 'green';
ctx.roundRect(200, 100, 100, 150, 10);  // Método 'roundRect' debe estar en minúsculas
ctx.fill();

// Dibujo del rectángulo negro
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.roundRect(200, 100, 100, 20, 10);  // Método 'roundRect' debe estar en minúsculas
ctx.fill();

// Dibujo del círculo blanco
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(270, 140, 10, 0, Math.PI * 2, true);  // 'Math.PI' con 'M' mayúscula
ctx.fill();
ctx.stroke();

// Dibujo del triángulo
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(250, 150);
ctx.lineTo(260, 180);
ctx.lineTo(240, 180);
ctx.fill();

// Dibujo del rectángulo adicional
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.roundRect(220, 200, 60, 20, 10);  // Método 'roundRect' debe estar en minúsculas
ctx.fill();

// Dibujo del triángulo amarillo
ctx.fillStyle = 'yellow';
