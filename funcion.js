//function bloque de codigo que realiza una tarea especifica cuando se llama, e puede crear funciones para tareas repetitivas
let nombre =prompt("Ingresa tu nombre");
nombre = nombre.toUpperCase();
function Saludar(nombre){
    return alert(`hola   ${nombre}, como estas`);
}

Saludar(nombre);

//funcion útil 
function getRandomNumber() {
    // recuperamos un número aleatorio entre 0 y 1
    const random = Math.random() // por ejemplo: 0.6803487380457318
    // lo multiplicamos por 10 para que esté entre 0 y 10
    const multiplied = random * 10 // -> 6.803487380457318
    // redondeamos hacia abajo para que esté entre 0 y 9
    const rounded = Math.floor(multiplied) // -> 6
    // le sumamos uno para que esté entre 1 y 10
    const result = rounded + 1 // -> 7
    // devolvemos el resultado
    return alert(result);
}
getRandomNumber();