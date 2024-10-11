const inputWidth = document.querySelector('#width');
const inputHeight = document.querySelector('#height'); 
const inputShadow = document.querySelector('#shadow');

const container = document.querySelector('.container');

let width = 0;
let height = 0; 
let shadow = 0;

const dynamic = () => {
    return `
    width: ${width}px;
    height: ${height}px; 
    box-shadow: ${shadow}px;
    `;
}

inputHeight.addEventListener('input', (e) => { 
    console.log(e.target.value);
    height = e.target.value;
    container.style = dynamic(); 
});

inputWidth.addEventListener('input', (e) => {
    console.log(e.target.value);
    width = e.target.value;
    container.style = dynamic(); 
});

inputShadow.addEventListener('input', (e) => {
    console.log(e.target.value);
    shadow = e.target.value;
    container.style = dynamic(); 
});