const images = document.querySelectorAll('.images img');  // Todas las imágenes (piedra, papel, tijera)
const imgUser = document.querySelector('#choiceuser');  // Imagen donde se muestra la elección del usuario
const imgCompu = document.querySelector('#choiceCompu');  // Imagen donde se muestra la elección de la computadora

const choices = {
    siccors: 'tijeras',  // Definir las elecciones con sus nombres o ID
    rock: 'piedra',
    paper: 'papel'
};

// Función para obtener la elección del usuario
const getChoiceUser = (e) => {
    const image = e.target;  // Obtenemos la imagen que el usuario ha hecho clic
    const choiceUser = image.getAttribute('data-id');  // Obtenemos el atributo 'data-id' (piedra, papel, tijeras)
    const imageUser = image.src;  // Obtenemos la imagen fuente
    
    imgUser.src = imageUser;  // Actualizamos la imagen mostrada para el usuario

    // Obtener la elección de la computadora
    const compuChoice = getCompuChoice();
    
    // Llamamos a la función 'play' para comparar ambas elecciones
    play(choiceUser, compuChoice);
}

// Función para obtener la elección de la computadora
const getCompuChoice = () => {
    const choicesArray = Object.keys(choices);  // Obtenemos las opciones (siccors, rock, paper)
    const randomIndex = Math.floor(Math.random() * choicesArray.length);  // Generamos un índice aleatorio
    const compuChoice = choicesArray[randomIndex];  // Elegimos una opción aleatoria
    const imageCompu = document.querySelector(`#${compuChoice}`).src;  // Obtenemos la imagen de la elección de la computadora
    
    imgCompu.src = imageCompu;  // Actualizamos la imagen mostrada para la computadora
    return compuChoice;  // Devolvemos la elección de la computadora (data-id)
}

// Función para comparar las elecciones y determinar el ganador
const play = (choiceUser, choiceCompu) => {
    console.log("User choice:", choiceUser);
    console.log("Computer choice: ", choiceCompu);

    let result = '';

    // Reglas del juego para comparar las elecciones
    if (choiceUser === choiceCompu) {
        result = "Empate!";
    } else if (
        (choiceUser === 'rock' && choiceCompu === 'siccors') ||
        (choiceUser === 'siccors' && choiceCompu === 'paper') ||
        (choiceUser === 'paper' && choiceCompu === 'rock')
    ) {
        result = "¡Ganaste!";
    } else {
        result = "¡Perdiste!";
    }

    // Mostrar el resultado
    alert(result);
}

// Agregar evento de click a cada imagen (piedra, papel, tijeras)
images.forEach(image => image.addEventListener('click', getChoiceUser));
