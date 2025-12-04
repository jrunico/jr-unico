//====================================================ATV1==============================================================

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout 
// });

// rl.question("Digite a primeira nota: ", (n1) => {
//     rl.question("Digite a segunda nota: ", (n2) => {
//         const nota1 = Number (n1);
//         const nota2 = Number (n2);

//         const media = (nota1 + nota2) / 2;

//         if (media < 8) {
//             console.log("Que pena você não passou! sua nota foi " + media);
//         } else {
//             console.log("Parabéns você passou de ano!!! sua nota foi " + media);
//         }

//         rl.close();
//     });
// });


//==================================================ATV2=========================================================================

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout 
// });

// rl.question("Digite a primeira nota: ", (n1) => {
//     rl.question("Digite a segunda nota: ", (n2) => {
//         const nota1 = Number(n1);
//         const nota2 = Number(n2);
//         const media = (nota1 + nota2) / 2;

//         switch (true) {
//             case (media < 8):
//                 console.log("Que pena, você não passou! Sua nota foi " + media);
//                 break;
//             case (media >= 8):
//                 console.log("Parabéns, você passou de ano!!! Sua média é " + media);
//                 break;
//             default:
//                 console.log("Erro ao calcular a média.");
//         }

//         rl.close();
//     });
// });


//=====================================================ATV3==========================================================================

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Digite a nota (0 a 100): ", (entrada) => {
//     const nota = Number(entrada);
//     let classificacao = "";

//     switch (true) {
//         case (nota >= 90 && nota <= 100):
//             classificacao = "A";
//             break;
//         case (nota >= 80 && nota <= 89):
//             classificacao = "B";
//             break;
//         case (nota >= 70 && nota <= 79):
//             classificacao = "C";
//             break;
//         case (nota >= 60 && nota <= 69):
//             classificacao = "D";
//             break;
//         case (nota >= 0 && nota <= 59):
//             classificacao = "F";
//             break;
//         default:
//             classificacao = "Inválida";
//     }

//     if (classificacao === "Inválida") {
//         console.log("Nota inválida! Digite um valor entre 0 e 100.");
//     } else {
//         const aprovado = (classificacao === "A" || classificacao === "B" || classificacao === "C");
//         console.log(`Classificação: ${classificacao}`);
//         console.log(aprovado ? "Parabéns! Você foi aprovado!" : "Infelizmente, você não foi aprovado.");
//     }

//     rl.close();
// });