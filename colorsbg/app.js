const body = document.querySelector('body');
const btnChange = document.querySelector('#btnchange');
const span = document.querySelector('h2 span')

const changecolor = () => {
    let color = '#'
    const letras = '0123456789ABCDEF';
    for(let i=0; i<6; i++){
        const aleatorio = Math.floor(Math.random()*16);
        color+=letras[aleatorio];
    }
    body.style.backgroundColor = color;
    span.innerText = color;
}

// const changecolor = () =>{
//     const options = '123456789abcdef';
//     const separation = options.split('');
//     for (let i=0; i=6;i++){
//     const hexadecimal = separation[]
//     }

    
// }


btnChange.addEventListener('click', changecolor);