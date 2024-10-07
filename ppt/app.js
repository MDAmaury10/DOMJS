const images = document.querySelectorAll('.images img');
const imgUser = document.querySelector('#choiceuser');
const siccors = document.querySelector('#siccors');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const imgCompu = document.querySelector('#choiceCompu');


const getChoiceUser = (e) => {
    const image = e.target;
    const choiceUser = image.getAttribute('data-id');
    const imageUser = image.src;
    //pintar imagen en de choices
    imgUser.src = imageUser;
    getCompuChoice();
    //llamar a la funcion play
    play(choiceUser);
}

const getCompuChoice = () => {
    const choices = [siccors,rock, paper]
    const compuChoice = Math.floor(Math.random() * choices.length);
    return choices[compuChoice];
    play(compuChoice);
}


const play = (choiceUser, compuImage) => {
    // Lógica adicional que quieres ejecutar con choiceUser
    console.log("User choice:", choiceUser);
    console.log("Computer choice: ", choices);
}

images.forEach(image => image.addEventListener('click', getChoiceUser));
