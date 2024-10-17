const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
let radius = 20;
let growing = true;

const circle = {
    x: lienzo.width / 2,
    y: lienzo.height / 2,
    color: 'rgb(100,20,30)',
    getColor: function() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const t = Math.random();
        this.color = `rgba(${r},${g},${b},${t})`;
    },
    show: function() {
        ctx.clearRect(0, 0, lienzo.width, lienzo.height);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fill();
    }
};

setInterval(() => {
    circle.getColor();
    circle.show();
    if (growing) {
        radius += 5;
        if (radius >= 300) {
            growing = false;
        }
    } else {
        radius -= 2;
        if (radius <= 20) {
            growing = true;
        }
    }
}, 100);
