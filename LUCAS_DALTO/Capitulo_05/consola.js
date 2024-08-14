console.log('******************************FUNCIONES DE REGISTRO******************************');
console.log('=============console.assert()===================');
//permite verificar si una expresion es verdader o acertada, en caso de ser falso imprimira un mensaje
console.assert(5<3);

console.log('================Console.clear()================================');
//permite limpiar la consola del navegador, elimina todos los mensajes y contenido que se hayan imprimido en consola
//console.clear(); //limpiando  de consola

console.log('===================console.error()===================================');
//nos muestra los errores que se presentan el codigo
console.error(' ❗esta presentando errores');

console.log('===================console.info()================================');
//nos muestra el mensaje de informacion
console.info('estes es un mensaje de depuración');

console.log('===================console.table()================================');
//funcion que toma los argumentos obligatorios: data, que debe de haber un array o un objeto, y un parámetro adicional: columnas, y nos muestra una tabla en consola
console.table([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
console.table({nombre:"A", apellidos:"B", edad: 18});

console.log('=================console.warn()============================');
//nos muestra un mensaje de advertencia
console.warn('advertencia');

console.log('=================console.dir()============================');
/*El método console.dir() en JavaScript se utiliza para mostrar una representación en forma de árbol interactivo de un objeto, lo que permite explorar sus propiedades y métodos de manera más clara que con console.log(). Esto es especialmente útil cuando quieres inspeccionar objetos complejos, como objetos DOM (Document Object Model) o cualquier objeto JavaScript con muchas propiedades.*/
console.dir([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

console.log('******************************** FUNCIONES DE CONTEO ********************************');
console.log('===================console.count() ================================');
//nos muestra la cantidad de veces que se hace uso de esa función
console.count(); //1
console.count(); //2
console.count(); //3
console.count(); //4
console.countReset(); //resetea la cuenta para fines de desarrollo
console.count(); //1

console.log('********************************FUNCIONES DE AGRUPACION****************');
//crea un nivel de grupo
console.group('grupo1'); // nivel de grupo 1
console.log('hola');
console.error('error');
console.count('conteo'); 
console.count('conteo'); 

console.group('grupo 2'); // nivel de grupo 2
console.log('hola');
console.error('error');
console.count('conteo'); 
console.count('conteo'); 

console.group('grupo 3'); // nivel de grupo 3
console.log('hola');
console.error('error');
console.count('conteo'); 
//eliminar grupo
console.groupEnd(); //elimina un grupo

console.log('********************* FUNCIONES DE TEMPORIZADOR ****************');
console.log('================================ console.timeLog()================================');
//nos indica el tiempo de ejecución del codigo
console.time();

console.log('===============modificar texto=================');
console.log("%hola, color:#fff ");

