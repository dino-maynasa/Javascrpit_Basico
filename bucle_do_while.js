let respuesta= undefined;
let edad= undefined;
const CI=true;
//la funcion confirm nos muestra ventana emergente donde devuelve un true en caso de querer permanecer en la pagina y false en caso contratio
do { 
    respuesta = confirm('Quieres seguir en el bucle?'); 
    edad = prompt('ingrese su edad');
    if (edad >= 18 && CI){
        alert("Puedes conducir");
    } 
    else{ 
        alert("No puedes conducir");
    }
}
while (respuesta);