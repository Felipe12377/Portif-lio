let num1;
let num2;
let resultado;
let parOuImpar

num1 = Number(window.prompt("digite aqui o primeiro numero: "))

num2 = Number(window.prompt("digite aqui o segundo numero: "))

resultado = num1 + num2;

parOuImpar = resultado % 2;


if(resultado > 10) {
    alert("o numero " + resultado + " é maior do que 10")
} else {
    alert("o numero  " + resultado + " é menor do que 10")
}

if(parOuImpar == 0 ) {
    alert("o numero " + resultado + " é par")
} else {
    alert("o numero " + resultado + " é ímpar")
}


