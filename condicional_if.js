//bloque de codigo quie se ejecuta solo se cumple una condicion

//ejemplos
const edad = 18;
if (edad >= 18) {
console.log('Eres mayor de edad')
}
else  {
    console.log('Eres menor de edad');
}

if(edad >= 18) { 
    console.log( 'Eres mayor  de edad');
} else if (edad >= 16) {
    console.log('Eres casi mayor de edad');
}
else { 
    console.log('Eres menor de edad');
    }

//anidacion de  condicionales 
const edad1 = 17;
const tieneCarnet = true;

if (edad1 >= 18) {
if (tieneCarnet) {
    console.log('Puedes conducir')
} else {
    console.log('No puedes conducir')
}
} else {
console.log('No puedes conducir')
}