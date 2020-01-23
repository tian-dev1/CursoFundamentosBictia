//alert("Hola Mundo");
//console.log("Hola!!!");


// numero = 4;

// if(numero !== 4 && numero <= 3 ){
//     var numero = 10;
//     console.log(numero)
//     console.log("Aca llego")
// }else{
//     console.log("Aca si entro")
// }

// console.log(numero);


/* 
Crear dos variables 
var num1
var num2

validar cual es el mayor
*/


// EJERCCIO 1
// var num1 = 5 
// var num2 = 2

// if (num1 > num2 ){
//     console.log(num1 + " Es mayor que " + num2)
//     console.log(`${num1} Es mayor que ${num2}`)
// }else{
//     console.log(num2 + " Es mayor o igual " + num1)
// }

// var numeroUsuario = prompt("Digite un número");


// var numero1 = prompt("Digite el primer número");
// var numero2 = prompt("Digite el segundo número");


// if (numero1 > numero2 ){
//         console.log(` ${numero1} Es mayor que ${numero2}`)
//     }else{
//         console.log(` ${numero1} Es menor o igual que ${numero2}`)
//     }


    var array = ['Cristian', 100, false, 40.0];
    // console.log(typeof array);
    // console.log(array[0]);

    // var numeroUsuario = prompt("ingresa un número: ");
    // console.log(typeof numeroUsuario);
    // console.log(parseInt(numeroUsuario))
    // if(!isNaN( parseInt(numeroUsuario))){
    //     console.log("Aca llega")

    // }
pedirEdad();

    function validarNumero(numero){
        if(!isNaN( parseInt(numero))){
            validarMayorEdad(numero);
        }else{
            pedirEdad();
        }
    }


    function pedirEdad(){
        var edadUsuario = prompt("Ingrese su edad: ");
        validarNumero(edadUsuario);
    }


    function validarMayorEdad(edad){
        if(edad >= 18){
            console.log("Usted es mayor de edad")
        }else{
            console.log("Usted no es mayor de edad")
        }
    }
