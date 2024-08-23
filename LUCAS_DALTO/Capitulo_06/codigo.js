// let parrafo = document.getElementById("parrafo"); //una forma
// //document.write(parrafo +'<br/>');

// let parrafo2 = document.getElementsByTagName("p"); // selecciona la coleccion o lista de elementos, los elementos que los contienen son objetos
// //acceder a elementos de parrafo2  document.write(parrafo2[0]);
// //document.write(parrafo2 +'<br/>');

// //******************************** */
// //query selectores
// let parrafo3 = document.querySelector("#parrafo"); //estructura para seleccionar ID
// //document.write(parrafo3 +'<br/>');

// let parrafo4 = document.querySelector(".je"); //estructura para seleccionar clase
// //document.write(parrafo4 +'<br/>');

// let parrafo5 = document.querySelectorAll("#parrafo"); //nodo de listas
// //document.write(parrafo5 +'<br/>'); //node list
// //document.write(parrafo5[2] +'<br/>'); //busqueda en indice espeifico

// //********************************** */

// const rango = document.querySelector('.rango'); //captura
// rango.setAttribute('type', 'time'); //modificacion
// let valor = rango.getAttribute('type'); //obtiene el tipo de atributo
// document.write('el tipo del input es: ' + valor);
// //rango.removeAttribute('type');  //elimina los atributos

//modificando el titulo
const titulo = document.querySelector('.titulo'); //seleccionamos  la clase titulo
titulo.setAttribute('contentEditable', 'true'); // true editable, false no editable
titulo.setAttribute('dir', 'rtl'); //para poder manejar la posicion de los textos, pero se puede hacer directamente desde css
//titulo.setAttribute('hidden', 'true'); // hace desaparecer el texto
//titulo.removeAttribute('hidden') // elimina el hidden
titulo.setAttribute('tabindex', '0'); //controla el orden de ejecucion de la tabulacion
titulo.setAttribute('title', 'Este es un titulo'); //indica la descripción del texto al desplazar el cursor sobre ella

//imput 
const input = document.querySelector('.input-normal');
input.setAttribute('value', 'cadena'); //este asigna un valor predefinido

const input1 = document.querySelector('.input-normal1');
input1.setAttribute('placeholder', 'ingrese un dato'); //pare el fondo del input 
input1.setAttribute('type', 'number'); // para especificar el tipo de dato de entrada

//tambien se puede utilizar directamente
const input2= document.querySelector('.input-normal2'); 
input2.setAttribute('type', 'file'); //indica el tipo de archivo
input2.setAttribute('accept', '.doc');  //indica que acepta solo de tipos .doc
input1.minlength = '1';
//input1.setAttribute('minlength', '10'); //indica la cantidad maxima de caracter que debe de tener el input
input1.setAttribute('required', 'true'); //indica que es un campo requerido para poder enviar

const titulo2 = document.querySelector('.titulo2'); // se pone por que se aplica al elemento
titulo2.style.color = 'red';
    //en caso de aplicar al elemento se utiliza element.querySelector('.titulo')


    //clase, classList
const titulo3 = document.querySelector('.titulo3'); //captura la clase
titulo3.classList.add('titulo_agregado'); //agrega una clase
// titulo3.classList.remove('titulo_agregado'); //elimina una clase 
const item = titulo3.classList.item(1);  // nos devuelve la posicion de la clase // class="titulo3 titulo_agregado"
document.write(`La posición de la clase es:  ${item} <br>`);  //titulo_agregado
const tit= titulo3.classList.contains('titulo_agregado'); // verifica si contiene la clase buscada, en caso de existir nos devuelve un true || false
document.write(tit); //true

titulo3.classList.toggle('titulo_agregados'); //si no tiene la clase especificada,la agrega, si ya la tiene la elimina
titulo3.classList.replace('titulo_agregados', 'clase_reemplazado'); //reemplaza la clase por otra

