//para usar los arrays se usa los corchetes []
//coleccion de numeros

//en javascript se puede tener arrays de tipo tipo: ['uno', 2, true, null, undefined]

let numeros = [1,2,3,4,5,6,7,8,9,10];
//modificando elementos internos dentro del array, se cambia por que se le puede modificar solo internamente un elemento especifico siendo node
let nombres = ['Maria', 'Carlos', 'Ruben', 'David'];
numeros[9]=30;

for (let i= 0; i<numeros.length; i++) {
    console.log(numeros[i]);
}

for (let i= 0; i<nombres.length; i++) {
    console.log(nombres[i]);
}

let i=0;
while(i < numeros.length){
    if(numeros[i] % 2 === 0) {
    numeros[i] = 'par';
    }
    i++;
};


for (let i= 0; i<numeros.length; i++) {
    console.log(numeros[i]);
}
