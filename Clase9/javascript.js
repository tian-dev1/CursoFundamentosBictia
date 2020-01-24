
function cambiarContenido(id, contenido, contenidoExtra){
    var contenidoExtra = contenidoExtra
    // if( id == "divUno"){
        document.getElementById(id).innerHTML=contenido + contenidoExtra;

    // }
    }

function cambiarContenidoBootstrap(id, contenido1, contenido2){
    document.getElementById(id).innerHTML= contenido1 + contenido2 
}

function cambiarParrafos(array){
    // console.log(array);
    // console.log(array.length);


    for( var i= 0;   i<array.length;    i++ ){
        console.log( array[i])

        if(array[i] == 'parrafo1'){
            var contenido = "Sii, este es mi parrafo 1"
        }else{
            var contenido = "Este es el parrafo 2 , no entro a la condicción"
        }
        document.getElementById(array[i]).innerHTML = contenido
    }
}

function numerosHasta10(){
    for( var i= 0;   i<=10;    i++ ){
        console.log("El número es: " + i)
    }
}