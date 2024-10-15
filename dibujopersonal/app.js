// app.js
const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

// Dibujar la luna
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(500, 100, 50, 0, Math.PI * 2, true);
ctx.fill();

// Dibujar la cara de una calabaza
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(300, 250, 100, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

// Ojos de la calabaza
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(260, 220);
ctx.lineTo(280, 180);
ctx.lineTo(300, 220);
ctx.fill();

ctx.beginPath();
ctx.moveTo(340, 220);
ctx.lineTo(320, 180);
ctx.lineTo(300, 220);
ctx.fill();

// Nariz de la calabaza
ctx.beginPath();
ctx.moveTo(300, 240);
ctx.lineTo(290, 270);
ctx.lineTo(310, 270);
ctx.fill();

// Boca de la calabaza
ctx.beginPath();
ctx.moveTo(250, 300);
ctx.lineTo(350, 300);
ctx.lineTo(340, 320);
ctx.lineTo(320, 310);
ctx.lineTo(300, 320);
ctx.lineTo(280, 310);
ctx.lineTo(260, 320);
ctx.closePath();
ctx.fill();

// Dibujar un murciélago
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(130, 130);
ctx.lineTo(160, 100);
ctx.lineTo(130, 70);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(120, 70);
ctx.lineTo(150, 70);
ctx.lineTo(135, 90);
ctx.closePath();
ctx.fill();
