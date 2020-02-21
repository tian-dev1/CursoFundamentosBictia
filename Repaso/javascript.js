// Juego dados version HARD
// Cantidad de lados

var lados = 6;

// Funcion que retorna un numero random  
function lanzar() {
    return parseInt(Math.random() * (((lados * 2) + 1) - 2) + 2);
}

/* 
    Funcion que calcula, imprime y valida las posibilidades 
    del resultado de lanzar 2 dados
*/

function calcular(lanzamiento) {

    var myRandom = [];
    var cont = '';
    for (var i = 1; i <= lados; i++) {
        for (var j = 1; j <= lados; j++) {
            if (i + j == lanzamiento) {
                cont += '<tr>' +
                    '<td>' +
                    '<div class="box">' +
                    `<h1>${i}</h1>` +
                    '</div>' +
                    '</td>' +
                    '<td style="font-size: 50px; text-align:center; font-weight: 800">+</td>' +
                    '<td><div class="box-2">' +
                    `<h1>${j}</h1>` +
                    '</div></td></tr>';
                console.log(`i: ${i} j: ${j} i+j: ${i+j} lanzar: ${lanzamiento}`);
                myRandom += ` I ${i}  J: ${j}`;
                console.log(J);
            }
        }
    }
    document.getElementById('dice').innerHTML = cont;
}


function play() {
    var roll = lanzar();
    console.log(roll);
    document.getElementById('number').innerHTML = roll;
    calcular(roll);
}


/*  
    git commit --amend
    git remote 
    git remote  -v 
    git push -u origin master
*/