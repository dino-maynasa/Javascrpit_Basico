/* manejo de los metodos de Arrayas*/
console.log('===================pop()=============================');
//elimina el ultimo elemento de  un array
let nombres = ["Maria", "Jorge", "david", "Carlos"];
console.log(nombres);
console.log(nombres.pop());
console.log(nombres);

console.log('===================shift()============================');
//remueve el primer elemento de un array
let nombre = ["Maria", "Jorge", "david", "Carlos"];
console.log(nombre);
console.log(` el elemento removido es: ${nombre.shift()}`);
console.log(nombre);

console.log('===================reverse()============================');
//invierte el orden de los array.
let nombr = ["Maria", "Jorge", "david", "Carlos"];
console.log(`el orden original es: ${nombr}`);
nombr.reverse();
console.log(`modificado es: ${nombr}`);

console.log('===================unshift()============================');
//agrega  uno  o mas elementos al inicio de la cadena
let nomb = ["Maria", "Jorge", "david", "Carlos"];
nomb.unshift('elem1', 'elem2');
console.log(nomb);

console.log('===================sort()============================');
//ordena los elementos dentro de un array
let numers = [11, 34, 9, 67, 100, 1987,   500];
console.log(numers.sort( function (a, b){
    return a-b;
}));
console.log(numers);
console.log(typeof(numers));

console.log('==================splice()==============================================');
//agrega o elimina elementos splice(1,0) agrega un elemento de la posicion 1, y 0 para realizar la eliminacion.
// elimina elementos splice(posicion_inicio, cantidad reemplazar o eliminar)

//agregando numeros
let numeros = [4, 5, 6, 7, 8];
numeros.splice(0,0,0,1,2,3);
console.log(`primer array: ${numeros}`);
//reeemplazando 
numeros.splice(7,1, 0,1);
console.log(`segundo array ${numeros}`);

console.log('========================================métodos accesores========================');
//el join() separa los elementos que se convierten a cadena
let literal = ['primer', 'segundo', 'tercero', 'cuarto', 'estado', 'quinto'];
console.log(typeof (literal)); //object
let convertido = literal.join(' - '); // separadores y convertido a cadena
console.log(convertido); //primer-segundo-tercero-cuarto-estado-quinto
console.log(typeof (convertido)); //string 
console.log(convertido[0]);

console.log('===============filter()=================');
//filter y foreach son casi lo mismo, pero filter tiene un plus mas completo
let filter = [8,8,9,23,45,56,23];
let filtrado = filter.filter((filter)=>{
console.log(filter +  "\n");
});