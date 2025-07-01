let mostraHTML = document.getElementById("mostraHTML");
let numero = 0

function Aleatorio(){


    numero = parseInt(Math.random() * 101);

    mostraHTML.innerHTML += `<p>Numero Aleatorio: ${numero}!</p>`;

    console.log(numero);

}

function zerar(){
    numero = 0

    mostraHTML.innerHTML = null;

    console.log(numero);
}