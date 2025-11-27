const prompt = require("prompt-sync")();

function validarNumero(valor) {
    return /^[0-9.]+$/.test(valor) && !isNaN(Number(valor));
}

let opcao;

do {
    console.log("\n===== CALCULADORA =====");
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");
    console.log("5 - Porcentagem");
    console.log("0 - Sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {

        case "1": {
            let n1 = prompt("Digite o primeiro número: ");
            let n2 = prompt("Digite o segundo número: ");

            if (!validarNumero(n1) || !validarNumero(n2)) {
                console.log("Entrada inválida, utilize apenas números.");
                break;
            }

            console.log(`Resultado: ${Number(n1) + Number(n2)}`);
            break;
        }

        case "2": {
            let n1 = prompt("Digite o primeiro número: ");
            let n2 = prompt("Digite o segundo número: ");

            if (!validarNumero(n1) || !validarNumero(n2)) {
                console.log("Entrada inválida, utilize apenas números.");
                break;
            }

            console.log(`Resultado: ${Number(n1) - Number(n2)}`);
            break;
        }

        case "3": {
            let n1 = prompt("Digite o primeiro número: ");
            let n2 = prompt("Digite o segundo número: ");

            if (!validarNumero(n1) || !validarNumero(n2)) {
                console.log("Entrada inválida, utilize apenas números.");
                break;
            }

            console.log(`Resultado: ${Number(n1) * Number(n2)}`);
            break;
        }

        case "4": {
            let n1 = prompt("Digite o primeiro número: ");
            let n2 = prompt("Digite o segundo número: ");

            if (!validarNumero(n1) || !validarNumero(n2)) {
                console.log("Entrada inválida, utilize apenas números.");
                break;
            }

            if (Number(n2) === 0) {
                console.log("Erro: divisão por zero não é permitida.");
                break;
            }

            console.log(`Resultado: ${Number(n1) / Number(n2)}`);
            break;
        }

        case "5": {
            let total = prompt("Digite o valor total: ");
            let porc = prompt("Digite a porcentagem (%): ");

            if (!validarNumero(total) || !validarNumero(porc)) {
                console.log("Entrada inválida, utilize apenas números.");
                break;
            }

            let r = (Number(total) * Number(porc)) / 100;
            console.log(`Resultado: ${r}`);
            break;
        }

        case "0":
            console.log("Encerrando o programa...");
            break;

        default:
            console.log("Opção inválida, utilize apenas números entre 0 e 5.");
            break;
    }

} while (opcao !== "0");
