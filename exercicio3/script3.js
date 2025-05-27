function media() {
    let num1 = Number(window.prompt("Digite sua primeira nota:"))
    let num2 = Number(window.prompt("Digite sua segunda nota:"))
    let num3 = Number(window.prompt("Digite sua terceira nota:"))

    let resultado = (num1 + num2 + num3) /3;
    alert("A sua média é " + resultado)


    if(resultado>=60){
        alert("Parábens! Você foi aprovado")
    }else{
        total = 60 - resultado
        alert("Você foi reprovado, faltou essa quantidade de pontos para ser aprovado:  " + total)
    }
}