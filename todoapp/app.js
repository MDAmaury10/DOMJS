const inputTarea = document.getElementById('tareatxt');
const divTareas = document.getElementById('tareas');
const myForm = document.querySelector('#myForm');

let arrayTareas = localStorage.getItem('tareas')
                        ? JSON.parse(localStorage.getItem('tareas'))
                        : [];

const addTarea = () => {
    const tarea = inputTarea.value;
    inputTarea.value = '';
    arrayTareas.push({
        tarea:tarea,
        estado:'danger',
        id: Math.floor(Math.random *1000)
    })
}

const construyeDivs = () => {
    localStorage.setItem('tareas', JSON.stringify(arrayTareas))
}

const deleteItem = (e) => {
    const cDiv = e.target.parentElement;
    const id = cDiv.getAttribute('data-id');
    arrayTareas = arrayTareas.filter(tarea => tarea.id !== Number(id));
    cDiv.remove();
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
}

const createTarea = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');
    const editButton = document.createElement('button');
    button.addEventListener('click', deleteItem);
    editButton.addEventListener('click', updateTarea);
    p.innerText = tarea.tarea;
    button.innerText = 'Eliminar';
    editButton.innerText = 'Editar';
    div.appendChild(editButton);
    div.appendChild(p);
    div.appendChild(button);
    div.classList.add('alert');
    div.classList.add('data-d', tarea.estado);
    div.setAttribute('data-id', tarea.id);
    div.addEventListener('click', changeColor);
    return div;
};

const updateTarea = (event) => {
    const editButton = event.target;
    const div = editButton.parentElement;
    const paragraph = div.querySelector('p');
    const id = div.getAttribute('data-id');
    const replaceText = prompt('Ingrese el nuevo texto:', paragraph.innerText);   
    paragraph.innerText = replaceText;
    const tareaIndex = arrayTareas.findIndex(tarea => tarea.id == id);
    arrayTareas[tareaIndex].tarea = replaceText;
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
}

const changeColor = (e) => {
    const cDiv = e.target;
    const id = cDiv.getAttribute('data-id');
    const encontrado = arrayTareas.findIndex(tarea => tarea.id === Number(id));
    if (cDiv.classList.contains('danger')) {
        cDiv.classList.remove('danger');
        cDiv.classList.add('warning');
        arrayTareas[encontrado].estado = 'warning';
    } else if (cDiv.classList.contains('warning')) {
        cDiv.classList.remove('warning');
        cDiv.classList.add('success');
        arrayTareas[encontrado].estado = 'success';
    }
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
}

construyeDivs();

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTarea();
})
