// para poder modificar datos en array hay métodos.

const frutas  = [ 'mango', 'lima', 'manzana', 'sandia'];
//conocer la longitud
console.log('la cantidad de frutas es: ' + frutas.length);
console.log('================================================================');
// añadir una fruta 
frutas.push('durazno');
console.log('haciendo push se agrega: ' + frutas[frutas.length - 1]);
console.log(frutas);

console.log('================================================================');
//sacar un ultimo elemento
console.log('se esta sacando la fruta:  ' + frutas[frutas.length-1]);
(frutas.pop()); //esta sacando el ultimo 
console.log(frutas);

console.log('================================================================');
//sacar el primer elemento del array y eliminarlo
frutas.shift(); //recupera el primer elemento del array y lo elimina
console.log(frutas);

console.log('================================================================');
//añade un primer elemento del array en [0]
frutas.unshift('fresas'); //recupera el primer elemento del array
console.log('agredaremos un primer elemento al array: ' + frutas[frutas.length - frutas.length]);
console.log(frutas);

console.log('================================================================');
//se puede agregar de golpe varios elemetos
frutas.push('mango', 'cerezas','plátanos'); 
console.log(frutas);

console.log('================================================================');
//concatenar arrays 
const array1 = [1,2,3];
const array2 = [ 4,5,6];
const todosArrays = array1.concat(array2);
console.log(todosArrays);

console.log('================================================================');
//otra forma de concatenar arrays  con Spread
const array3 = [1,2,3];
const array4 = [ 4,5,6];
const todosArray = [...array3, ...array4]
console.log(todosArray);