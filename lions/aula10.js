//=====================================================ATV1===============================================================

// const numero = 25; // você pode trocar o valor aqui

// if (numero % 5 === 0) {
//     console.log(`O número ${numero} é divisível por 5.`);
// } else {
//     console.log(`O número ${numero} não é divisível por 5.`);
// }

//====================================================ATV2============================================================================

// const numeros = [1,2,3,4,5,6,7,8,9,10];
// const impares = [];

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 !== 0) {
//         impares.push(numeros[i]);
//     }
// }

// console.log(impares);

//================================================================ATV3=========================================================

// let numeros = [27, 10, 3, 0, 20, 5, 6, 3];

// numeros.push(18);

// let pares = [];
// let impares = [];

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//         pares.push(numeros[i]);
//     } else {
//         impares.push(numeros[i]);
//     }
// }

// console.log("Vetor original:", numeros);
// console.log("Números pares:", pares);
// console.log("Números ímpares:", impares);

//=======================================ATV4=======================================================================================

// let notas = [7.5, 8.0, 6.5, 9.0, 5.0, 10.0, 8.5, 7.0, 9.5, 6.0];

// let soma = 0;
// for (let i = 0; i < notas.length; i++) {
//     soma += notas[i];
// }
// let media = soma / notas.length;
// console.log("Média das notas:", media.toFixed(2));

// let maiorNota = Math.max(...notas);
// let menorNota = Math.min(...notas);
// console.log("Maior nota:", maiorNota);
// console.log("Menor nota:", menorNota);

// let acimaMedia = 0;
// for (let i = 0; i < notas.length; i++) {
//     if (notas[i] > media) {
//         acimaMedia++;
//     }
// }
// console.log("Notas acima da média:", acimaMedia);

// notas.push(8.2);
// console.log("Array atualizado:", notas);

// let reprovados = 0;
// for (let i = 0; i < notas.length; i++) {
//     if (notas[i] < 8.0) {
//         reprovados++;
//     }
// }
// console.log("Notas reprovadas (abaixo de 8.0):", reprovados);
