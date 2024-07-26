//ejemplos
// iniciamos la variable fuera del bucle
let cuentaAtras = 10
// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
console.log(cuentaAtras)
  // restamos 1 a la cuenta atrás
cuentaAtras = cuentaAtras - 1
}
console.log('¡Despegue! 🚀')



//palabras reservadaas en BREAK, CONTINUOS
//**BREAK** 
let cuentaAtra = 10
while (cuentaAtra > 0) {
console.log(cuentaAtra)
cuentaAtra = cuentaAtra - 1
  // si la cuenta atrás es 5, salimos del bucle
if (cuentaAtra === 5) {
    break // <---- salimos del bucle, a partir de este codigo se rompe el bucle
}
}


//uso de los constinue
let cuenta = 10
while (cuenta > 0) {
cuenta= cuenta- 1
  // si la cuenta atrás es 5, salimos del bucle
if (cuenta % 2 === 0) {
    continue // <---- no mostrara los números pares, saltara a la siguiente iteración
}
console.log(cuenta)
}

//anidacion de bucles
