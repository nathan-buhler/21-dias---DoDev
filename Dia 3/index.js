let nome = ""
let idade = 0
let altura = 0
let peso = 0 


nome = prompt ("digite seu nome")
idade = parseInt (prompt ("digite sua idade"))
altura = parseFloat (prompt ("digite sua altura"))
peso = parseInt (prompt("digite seu peso"))

let anoNasc = 0
anoNasc = 2023 - 0

let Imc = 0 
imc = peso/(altura * altura)

console.log("Olá" + nome + ", você tem" + idade + "anos, nasceu em"+ anoNasc + ", tem" + altura + "de altura, pesa" + peso + "kg, seu IMC é" + imc + "Kf/m2.")