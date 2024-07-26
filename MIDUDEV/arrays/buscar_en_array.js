//existen vaias maneras de poder buscar elementos en un array
/* 
-indexOf
-some
-every
-find
-findIndex
-includes
*/
console.log('======================indexOf==========================');
const marcas = ['Toyota', 'Nissan', 'Ford', 'Suzuki'];
const posicion = marcas.indexOf('Toyota');
console.log(posicion); //nos muestra en que posicion se encuentra dicha marca


console.log('======================includes==========================');
//determina si hay un determinado elemento de esta manera nos devuelve ya sea un true o false

const ropas = ['Nike', 'Adidas', 'Puma', 'Under Armour'];
console.log(ropas.includes('Nike')); //

console.log('======================some==========================');
//some nos permite verificar si alguno de los elementos de array cumple con una condición, recibe como booleano un dato, siu algunos de los elementos por lo menos retorna true nos devuelve true
//esta es una de las funciones mas potentes 
const departamentosDeBolivia = ['Pando','Beni','Santa Cruz','Cochabamba','La Paz','Oruro','Potosí','Tarija','Chuquisaca'];
const departamentos = departamentosDeBolivia.some(departamento => departamento === 'Pando');
console.log(departamentos);
//==================
const names = ['Leo', 'Isa', 'Ían', 'Lea']

const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo) // -> false
//=================
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers.some(number => {
console.log(`Estoy iterando sobre el número ${number}`) // -> Imprime hasta el número 6
return number > 5
})

console.log(tieneNumeroMayorA5) // -> true

console.log('=============================== metodo every==========');
//permite verificar si todas los elementos de un array cumplen con una condicion, es similar a some, pero en ligar de verificar si al menos un de los elementos de un cumple con la condicion, los verifica
// ¿Todos los emojis son felices?
const emojis = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

// ¿Todos los números son pares?
const numbersa = [2, 4, 7, 10, 12]
const todosSonPares = numbersa.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const namesa = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = namesa.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true


console.log('============================find====================================');
//devuelve el primer elemento que cumple con la condicion, en este elemento nos devuelve el valor no como un boolenano
const animales = ['vacas', 'puercos', ' venados', 'condores', 'gaviotas', 'truchas', 'pacu'];
const animalConV = animales.find(animal => animal === "vacas");
console.log(animalConV) // -> true;