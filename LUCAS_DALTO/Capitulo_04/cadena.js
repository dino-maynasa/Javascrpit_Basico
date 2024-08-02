console.log('******************************** busqueda de cadenas********************************');
//función concatenar nos sirve para poder concatenar cadenas
let cadena="cadena de prueba";
let cadena1="prueba";
let cadeena_final = cadena.concat(cadena1);
console.log(cadeena_final);

console.log("======================startsWhit()==========================");
//funcion de cadena 
let startsWhit = cadena.startsWith(cadena1);
console.log(startsWhit); //false

console.log("======================endsWhit()==========================");
//verifica como termina la última palabra o consonante de las cadenas
let cadena2 = 'es la cadena';
let cadena3 = 'cadena';
let endsWhit = cadena2.endsWith(cadena3);
console.log(endsWhit); //true 

console.log('========================includes()===============================');
//busca un valor de tipo dentre de otra cadena
let cadena4 = 'esto es una cadena';
let cadena5 = cadena4.includes('una'); // retorna un  tipo de dato tanto true o false
console.log(cadena5); //true

console.log('========================indexOf()========================================');
//nos retorna el indice de la cadena buscada en la cual inicia, iniciando desde 0
// en casi de no existir la cadena buscada nos retorna un -1, siempre buscara el primer elemento
let cadena6 = 'es un indexOf indexOf';
let cadena7 = cadena6.indexOf('indexOf');
console.log(cadena7); //6

console.log('==============================lasIndexOf()==================================');
//nos devuelve el indice de la cadena, iniciando desde lo ultimo al primero, siempre buscará
// el ultimo de la cadena, en caso de no enconstrar nos devolerá un -1
let cadena8 = 'buscará el indice de la cadena desde desde lo ultimo';
let cadena9 = cadena8.lastIndexOf('desde');
console.log(cadena9);  // 37 esta en la posicion 31
console.log('************************************relleno de cadenas*************************************');;
console.log('================================padStrart()================================');
//rellena la cadena en el primer indice
let cadena10 = 'elemento agregado';
let cadena11 = cadena10.padStart(35,'"primer "'); //el tamaño de elemento a agregar, letra con el que rellenar
console.log(cadena11);

console.log('============================padEnd()====================================');
//rellena al final con los elementos, la estructura es el misma
let cadena12 = cadena10.padEnd(35, '"último"'); //primer elemento la cantidad de elementos a conseguir con la cadena pasada en el parametro
console.log(cadena12);

console.log('=============================repeat()===================================');
//repite las cadenas la veces que le indiqueemos en el parametro
let cadena13 = ('repite ') 
let cadena14 = cadena13.repeat(10); // se repetira la cadena 10 veces
console.log(cadena14);

console.log('*****************************transformación de cadena de cadenas*********************************');
console.log('==========================split()======================================');
//divide las cadenas, separadas por el tipo de elemento que la pasamos
// las cuales nos genera un  array con los datos  ya asignados
let cadena15 = 'las, cadenas, con, split';
let cadena16 =  cadena15.split(',');
console.log(cadena16);  //aca nos devuelve un array separado por las ',' [ 'las', ' cadenas', ' con', ' split' ]
console.log(cadena16[3]); //
cadena16.push('agregado'); 
console.log(cadena16);

console.log('===============================subString()=================================');
//nos indioca desde donde se quiere que comience nuestra cadena
let cadena17 = cadena15.substring(5,11); //indica desde conde inicia el primer parametro y el segundo donde termina
console.log(cadena17);   //cadena

console.log('============================toLowerCase()====================================');
//covierte las cadenas a minusculas
let mayusculas = 'ABCD';
let minusculas = mayusculas;
console.log(mayusculas.toLowerCase()); 

console.log('============================toUpperCase()================================');
//convierte las cadenas a mayusculas
let mayus = minusculas.toUpperCase();
console.log(mayus);

console.log('============================toString()====================================');
//realiza la conversion de numeros a cadenas
let numeros = 12345678; 
console.log(typeof(numeros)); //tipo number
let conversion = numeros.toString();  //conversion a cadena
console.log(typeof(conversion));  //tipo number 

console.log('=========================trimStart()=======================================');
//realiza la eliminacion de los espacios en blanco de la cadena
let espacio = '     espacios';
let eliminar_espacios = espacio.trimStart();
console.log(eliminar_espacios); //nos muestra la cadena que no tiene espacio al inicio

console.log('==============================trimEnd()==================================');
//elimina los espacios generados al final de cada cadena
let espacios_fin ='espacios      ';
let eliminar_fin = espacios_fin.trimEnd(); //elimina los espacios en  blanco de las cadena del final 
console.log(eliminar_fin); //
