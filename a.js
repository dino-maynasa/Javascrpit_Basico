let x;
console.log(x);  //undefined
console.log('================Objetos================');
let persona = {}
//agregando datos al objeto vaciio  persona
persona.nombre = 'Carlos';
persona.apellidos ='Riveros';
persona.edad=25;
console.log(persona); 

console.log('================creacion de nuevos objetos================');
//creacion de los nuevos objetos usando la palabra clave new Object();
const Carros = new Object();
//a
Carros.marca='toyota';
Carros.color= 'rojo';
Carros.modelo='1685'
console.log(Carros);
//se puede acceder a los objetos de  dos maneras.
/*-- objectName.propertyName*/  console.log('primera manera de acceder:  ' + Carros.modelo);
/*2-- objectName['propertyName]*/ console.log('segunda manera de acceder:  ' + Carros['modelo']);

console.log('=============================Métodos de objetos en javascript===================================');
const  Person = { FirstName:'John', LastName:'Doe', age:20, FullName:
function (){
return (`nombre:  ${this.FirstName}, apellidos: ${this.LastName}`);
    }
};
console.log(Person.FullName());

console.log('=========================Acceder a las propiedades=======================================');
let nombre = Person.FirstName;
let apellidos = Person['LastName'];  //para poder llamar por cadena poner las comillas
console.log('el nombre es:  ' + nombre);
console.log('El apellido es: '+ apellidos);

console.log('=========================Eliminar las propiedades del Objeto=======================================');
const Cars = {marca: 'Nissan', modelo: 2020, recorrido:10};
delete Cars.recorrido;  //elimina un elemento de un objeto
console.log(Cars);

console.log('=====================Objetos anidados===========================');

let nombres ={ 
    nombre1:'nombre 1', 
    nombre2:'nombre2', 
    nombre3:'nombre3', 
    apellidos:{ 
        apellidos1:'apellidos1.',  
        apellidos2:'apellidos2..',  
        apellidos3:'apellidos3...'}
    }
    console.log(nombres.apellidos.apellidos3);

console.log('====================Uso de Object.values()============================');
//crea una matriz a partir de los propiedades de un objeto 
let computadora = {marca: 'Alienware', memoria: 12, color: 'negro'};
console.log(typeof(computadora));
let miArray = Object.values(computadora); //conversion de la cadena a un objeto
console.log(miArray[0]);

console.log('==========================Object.entries()======================================');
// simplifikca el uso de los objetos en bucles
const fruits = {Bananas:300, Oranges:200, Apples:500}; 
let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
text += fruit + ": " + value + " ";
console.log(text);
}

console.log('--------------Usando JSON.stringify()------------------');
//los objetos se pueden convertir a cadena con el metodo stringify()
console.log(typeof(fruits));  //antes de convertir
let cadena = JSON.stringify(fruits); //convierte a cadena el array
console.log(typeof(cadena)); //despues de usar JSON.stringify()
console.log(cadena);