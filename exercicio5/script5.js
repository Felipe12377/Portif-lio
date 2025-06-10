function valor(){

    let valor1
    let valor2

    valor1 = Number(window.prompt("digite seu numero: "))
    valor2 = Number(window.prompt("digite seu numero: "))

    if(valor1 > valor2){
        alert("o numero " + valor1 + " é maior ")
    }else{
        alert("o numero" + valor2 + " é maior")
    }
}