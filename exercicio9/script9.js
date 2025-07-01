let mostraHTML = document.getElementById("mostraHTML");

function clique() {
    let meses = prompt("Digite um mês: ").toUpperCase();
    let estacao
    let cor

    if (meses === "DEZEMBRO" || meses === "JANEIRO" || meses === "FEVEREIRO"){
        estacao = "Verão"
        cor = "#"
    }else if (meses === "MARÇO" || meses === "ABRIL" || meses === "MAIO") {
        estacao = "Outono"
    }else if (meses === "JUNHO" || meses === "JULHO" || meses === "AGOSTO") {
        estacao = "Inverno"
    }else if (meses === "SETEMBRO" || meses === "OUTUBRO" || meses === "NOVEMBRO"){
        estacao = "Primavera"
    }

    mostraHTML.innerHTML = `<p>O mês ${meses} pertence a estação: ${estacao} </p>`
        

}
