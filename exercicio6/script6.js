let cliques = 0;
let mostraHTML = document.getElementById("mostraHTML");

function contador(){

    cliques ++;

    mostraHTML.innerHTML = `<p> Numero De Cliques: ${cliques}</p>`;
    console.log(cliques);
}