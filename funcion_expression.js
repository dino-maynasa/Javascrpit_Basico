//una funcion espression es una que se asigna a una variable
// esto es una function expression
const sum = function (a, b) {  //function expression se asigna a la variable
return a + b
}

// esto es una declaración de función
function sum(a, b) {
return a + b
}

//hoisting 
/*El hoisting es un término que se usa para describir cómo JavaScript parece que mueve las declaraciones
funciones al principio del código, de forma que las puedes usar incluso antes de declararlas. Por ejemplo:*/

suma(1, 2) // 3

function suma(a, b) {
return a + b
}

//el hoisting no se aplica a function expression nos devuelve undefined