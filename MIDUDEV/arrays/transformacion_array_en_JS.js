//, el metodo filter crea un nuevo array con todos los elementos que complan los requerimientos quelas mismas nos devuelvan un true,
console.log('===============================Filter=================================');
const numbers = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0
})

console.log(evenNumbers) // [2, 4, 6]

//quedamos con los metodos que tengan la letra a
const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings.filter(string => string.includes('a'))

console.log(stringsWithA) // ['hola', 'adiós', 'casa', 'gato']

console.log('==========================map======================');
//crea un nnuevo array con la misma longitud que la original, pero con  los elementos transformados
//ejempo podemos duplicar un numero de edades
const edad =[2,6,8,6,4,3];
const dobleEdad = edad.map((anios)=>{
return anios*2;
});
console.log(dobleEdad);
console.log('========================== MAP y FILTER======================');
//podemos crear encadenamiento de metodos, de esta forma si un metodo devuelve un array,podemos llamar a otro metodo sobre ese mismo arrayu sin necesidad de guardarlo en una variable
const number = [1, 2, 3, 4, 5, 6, 7]

const numsGreaterThanFive = number
  .map(number => number * 2) // [2, 4, 6, 8, 10, 12, 14]
  .filter(number => number > 5) // [6, 8, 10, 12, 14]

console.log(numsGreaterThanFive) // [6, 8, 10, 12, 14]