class Animal{   //clase padre
    constructor(especie, color, edad){ //constructor de la clase padre
        this. especie = especie;
        this. color = color;
        this. edad = edad;
    }
}

class Pez extends Animal  { //herencia
    super (especie, color, edad, raza){
        this.raza = raza;
    }
    static nadar(){  //metodos estaticos
        return "los peces nadan";
    }
}

class Perro extends Animal  { //herencia utlilizando  extends
    super (especie, color, edad, raza){
        this.raza =raza;
    }
    ladrar(){
        return "!Wow Wow!";
    }
    set setRaza(raza){
        this.raza = raza;
    }
    get getRaza(){
        return this.raza;
    }
}

//pruebas
console.log('=============================');
const animal = new Animal('mamiferos', 'negro', 3);
console.log(animal.especie);
const perro = new Perro('perros', 'naranja', 2, 'pitbull');   

console.log('=============================');
perro.setRaza='labrador';
console.log(perro.ladrar());
console.log(perro);
console.log(perro.getRaza);