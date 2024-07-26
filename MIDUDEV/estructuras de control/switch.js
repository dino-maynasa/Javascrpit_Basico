//estructuras de control que  nos permite ejecutar diferentes bloques de código dependiendo del valor

//sintaxis
/*witch (expresión) {
    case valor1:
      // código a ejecutar si la expresión coincide con valor1
      break
  
    case valor2:
      // código a ejecutar si la expresión coincide con valor2
      break
    default:
      // código a ejecutar si la expresión no coincide con ningún valor
      break
  }*/

const dia= new Date().getDay();
switch (dia) {
    case 0 : alert('Domingo') ;
    break;
    case 1: alert('Lunes') ;
    break;
    case 2: alert('Martes') ;
    break;
    case 3: alert('Miércoles') ;
    break;
    case 4: alert('Jueves') ;
    break;
    case 5: alert('Viernes') ;
    break;
    case 6: alert('Sábado') ;
    break;
    default  : alert('Error') ;
    break;
}


//agrupacion de cases 
switch (dia) {
    case 0:
    case 1: alert('Lunes') ;
    break;
    case 2:
    case 3: alert('Miércoles, a trabajar') ;
    break;
    case 4: 
    case 5: alert('ya es Viernes') ;
    break;
    case 6: alert('fín de Semana') ;
    break;
}

//patron de switch (true)
let edad = prompt('Ingresa tub edad: ');
switch(true) {
case (edad >= 18 && edad < 25):
alert("Eres mayor de edad y eres joven");
    break;
    case (edad >= 25 && edad < 40):
    alert("Eres mayor de edad y estás en plena madurez");
    break;
    case (edad >= 40):
    alert("Eres mayor de edad y estás en la mejor edad");
    break;
    default:
    alert("Eres menor de edad");
}