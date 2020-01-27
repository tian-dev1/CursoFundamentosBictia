/* Ejercicio 1*/
function cambiarTituloPelicula(id, contenido){
    document.getElementById(id).innerHTML=contenido 
}

/* Ejercicio 2*/
function tablaMultiplicar(num){
    for( var i= 1;   i<=10;    i++ ){
        var result = num * i;
        console.log( num + " x " + i + " Es igual a: " + result)
    }
}

/* Ejercicio 3*/
function estoEsUnaFuncion(){
    for(var i = 0; i <= 10; i++){
        if(i <= 5){
            console.log(i);
            console.log("El número es menor o igual a 5")
        }else{
            console.log(i);
            console.log("El número es mayor a 5")
        }
    }
}