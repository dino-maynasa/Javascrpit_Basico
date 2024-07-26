//para poder hacer el ordenamiento de datos de array se puede usar el metodo sort()
const numeros = [];
for(let i = 0; i <10; i++) {
    numeros.push(Math.round(Math.random()*10, 3));
}
numeros.sort();
console.log(numeros);

const edades = [18, 45, 65, 78, 85, 23, 21, 34, 29];
edades.sort();
console.log(edades);
