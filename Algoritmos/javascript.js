var num1 = prompt("Ingrese numero a evaluar");
var array= [];



    for(var i =1; i <= 4; i++){
        if(num1 % 2 == 0 || num1 % 3 == 0 || num1 % 5 == 0 || num1 % 7 == 0 ){
            console.log("Es divisible por" + num1[i-1])
        }
    }
    


var nums = []
var num1 = Number(prompt('Ingrese num'))
    while (n != 's') {
        var n = prompt('Valor'); nums.push(Number(n))
    } 
    for(var i = 0; i < nums.length; i++){
        if(num1 % nums[i] == 0){
            console.log('divisible por: ' + nums[i])
        }
    }    




    var n1 = prompt("Escribe un número");
var i;
for (i=2; i < n1 / 2; i++) {
    if (n1 % i === 0) {
        document.write("El número es primo");
    }else {
        document.write("El número no es primo");
    }
}
 

var n1 = prompt("Escribe un número");
var i = 2;
while (n1 % i !== 0 && i < n1 / 2 ) {
i++;
}
if (n1 % i !== 0) {
document.write("El número es primo");
} else {
document.write("El número no es primo");
}