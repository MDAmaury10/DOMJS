const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
let size = 20;
let growing = true;

const square = {
    x: lienzo.width / 2,
    y: lienzo.height / 2,
    color: 'rgb(100,20,30)',
    getColor: function() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        this.color = `rgb(${r},${g},${b})`;
    },
    show: function() {
        ctx.clearRect(0, 0, lienzo.width, lienzo.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - size / 2, this.y - size / 2, size, size);
    }
};

setInterval(() => {
    square.getColor();
    square.show();
    if (growing) {
        size += 5;
        if (size >= 300) {
            growing = false;
        }
    } else {
        size -= 2;
        if (size <= 20) {
            growing = true;
        }
    }
}, 100);
