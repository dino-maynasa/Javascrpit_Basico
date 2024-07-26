//devuele una cadena de texto que indica el tipo de operando

const numero = 10;
typeof numero // number

typeof undefined //undefined
typeof "nombre" // string
typeof true // boolean

//valor especial en js para null, nos devuelve un object, considerado como un bug historico que no se puede corregir a la fecha de hoy
typeof null // object 


//usando los operadores de comparacion
const edad = 42;
typeof edad === "number" // true

//operadores de comparacion
let Id = '42';
typeof Id === "string" // true

//comprobar multiples operaciones logicos
const anios = 42;
typeof anios === "number"  && anios > 18// true
