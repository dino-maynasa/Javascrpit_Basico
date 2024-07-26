//OPERADORES LOGICOS

//operadores or ||
console.log(true || true); // true (verdadero)
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false (falso)

//operador and &&
lert(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

//operador not !== 
console.log(!true); // false
console.log(!0); // true

//combinacion de operadores logicos 
2 < 3 && 3 < 4 // → true

2 + 2 < 3 && 10 < 8 * 2
// Primero se hacen las operaciones aritméticas:
// → 4 < 3 && 10 < 16
// Ahora las comparaciones:
// → false && true
// Finalmente:
// → false