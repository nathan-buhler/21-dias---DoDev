let combustivel = prompt("Você gostaria de colocar gasolina, alcool ou calibrar os pneus?")

switch (combustivel){
    case "gasolina":
        let valor = parseInt(prompt("Qual o valor desejado desejado?"))
        let quantidade = Number(valor/5)
        console.log(quantidade + "litros")
        break;
    case "alcool":
        let valor2 = parseInt(prompt("Qual o valor desejado desejado?"))
        let quantidade2 = Number(valor2/3)
        console.log(quantidade2 + "litros")
        break;
    case "calibrar":
        console.log("pneus calibrados com sucesso")
    }
