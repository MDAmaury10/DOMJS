const lienzo = document.querySelector('#lienzo');
const ctx lienzo.getContext('2d');

let x = 0;
let y = 0;

const square = {
    x:0,
    y:0,
    show: function(){
        ctx.fillRect(this.x, this.y, 40,40)
    } 
}