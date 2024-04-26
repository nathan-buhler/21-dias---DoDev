let numero1 = Number(prompt("Digite um número de 0 a 10"))
let numero2 = Number(prompt("Digite um número de 10 a 20"))

switch(numero1){
    case 10:
    let soma =Number(numero1 + numero2)
    console.log ("resultado soma é" + soma)
            break;
case 20:
         let divisão = parseInt(numero1 / numero2)
    console.log("resultado da divisão é" + divisão)
            break;
        default:
    console.log("default")
            break;
}