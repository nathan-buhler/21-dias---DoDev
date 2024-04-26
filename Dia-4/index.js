let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))
let carteira = prompt("Possui carteira de motorista?")
let carro = prompt("Possui carro?")

if (idade < 18 || carteira == "não"){
console.log("Nathan você não pode dirigir")
}else if( idade >= 18 && carteira == "sim" && carro == "não" ){
    console.log("Nathan você até pode dirigir, mas não tem um carro!")
}else{
    console.log("Nathan, você será o motorista")
}