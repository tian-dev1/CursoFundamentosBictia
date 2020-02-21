//Declaramos variables
var operandoa;
var operandob;
var operacion;


function mostrarOperadores() {
    if (operacion == undefined) {
        document.getElementById("suma").style.display = "block";
        document.getElementById("resta").style.display = "block";
        document.getElementById("multiplicacion").style.display = "block";
        document.getElementById("division").style.display = "block";
    }
}

function init() {




    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //Eventos de click
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
        mostrarOperadores();
       
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
        mostrarOperadores();
       
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
        mostrarOperadores();
       
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
        mostrarOperadores();
       
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
        mostrarOperadores();
     
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
        mostrarOperadores();
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
        mostrarOperadores();
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
        mostrarOperadores();
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
        mostrarOperadores();
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
        mostrarOperadores();
    }






    reset.onclick = function (e) {
        resetear();
    }
    suma.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function (e) {
        operandob = resultado.textContent;
        resolver();
    }
    
}


function limpiar() {
    resultado.textContent = "";
}
function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}


function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;



}