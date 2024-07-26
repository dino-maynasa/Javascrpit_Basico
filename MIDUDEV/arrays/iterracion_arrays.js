//iterar los arrays  con  while y for
const  marcasDeAuto = ["Toyota","Honda","Ford","Chevrolet","BMW","Mercedes-Benz","Audi","Volkswagen","Hyundai","Nissan"];
for (let i = 0; i < marcasDeAuto.length; i++) {
    console.log(marcasDeAuto[i]);
}
console.log('=======================================================');

let i = 0;
while (i < marcasDeAuto.length) {
    console.log(marcasDeAuto[i]);
    i++;
}
//estructura de control mas simple que el for, no necesitamos crear una variable para poder guardar el indice
console.log('===========iteracion con  for of ==========');
for (const auto of marcasDeAuto) {
    if(auto === "Volkswagen") {
        console.log('hay uno que es Wolkswagen');
        continue;
    }
console.log(auto);
}


//otro metodo de array for each

console.log('==========================Método de forEach=============================');
//es uno de los metodos de array forEach(), el cual nos permite ejecutar una  funcion  para cada uno de de los elementos del array
//usando la funcion flecha o conocido como arrow function e indicando solo el parametro que necesiitamos de nuestra funcion podemos simplificarlo aun mas

marcasDeAuto.forEach((marcasDeAuto) =>{ 
    console.log(marcasDeAuto); 
});
