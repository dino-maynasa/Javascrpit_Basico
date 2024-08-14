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
