//se llama a una tecnica que una funcion se llama a si misma siempre colocar una funcion de salida para no poder crear bucles infinitos
//tomar en cuenta siempre la condicion 
function CuentaAtras(num){
if(num < 0){
    return;
}
console.log(num);
CuentaAtras(num - 1 );
};

console.log (CuentaAtras(3));


//factorial de un nuero 
function factorial(n){
    if( n === 1 || n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));