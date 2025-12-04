// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Digite o tamanho mínimo da senha: ", (min) => {
//     rl.question("Digite o tamanho máximo da senha: ", (max) => {

//         min = Number(min);
//         max = Number(max);

//         if (isNaN(min) || isNaN(max) || min <= 0 || max < min) {
//             console.log("Valores inválidos. Tente novamente.");
//             rl.close();
//             return;
//         }

//         // Gera um número aleatório dentro do intervalo
//         const tamanho = Math.floor(Math.random() * (max - min + 1)) + min;

//         // Caracteres permitidos
//         const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

//         let senha = "";
//         for (let i = 0; i < tamanho; i++) {
//             const randomIndex = Math.floor(Math.random() * chars.length);
//             senha += chars[randomIndex];
//         }

//         console.log(`✅ Sua senha aleatória é: ${senha}`);

//         rl.close();
//     });
// });


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Digite o número da tabuada que deseja: ', (resposta) => {
//   const tabuada = Number(resposta);

//   console.log(`\nTabuada do ${tabuada}:\n`);

//   for (let i = 1; i <= 10; i++) {
//     console.log(`${tabuada} x ${i} = ${tabuada * i}`);
//   }

//   rl.close();
// });

// let somaPares = 0;
// let somaImpares = 0;
// let totalPares = 0;
// let totalImpares = 0;

// for (let i = 0; i <= 999; i++) {
//   if (i % 2 === 0) {        
//     somaPares += i;
//     totalPares++;
//   } else {                 
//     somaImpares += i;
//     totalImpares++;
//   }
// }

// const mediaPares = somaPares / totalPares;
// const mediaImpares = somaImpares / totalImpares;

// console.log("===== RESULTADOS =====");
// console.log(`Soma dos pares: ${somaPares}`);
// console.log(`Soma dos ímpares: ${somaImpares}`);
// console.log(`Total de pares: ${totalPares}`);
// console.log(`Total de ímpares: ${totalImpares}`);
// console.log(`Média dos pares: ${mediaPares.toFixed(2)}`);
// console.log(`Média dos ímpares: ${mediaImpares.toFixed(2)}`);

// if (somaPares > somaImpares) {
//   console.log("\nOs números PARES têm a soma maior.");
// } else if (somaImpares > somaPares) {
//   console.log("\nOs números ÍMPARES têm a soma maior.");
// } else {
//   console.log("\nAs somas são iguais!");
// }


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const opcoes = ['Pedra', 'Papel', 'Tesoura'];

// rl.question('Escolha Pedra, Papel ou Tesoura: ', (escolhaUsuario) => {

//   escolhaUsuario = escolhaUsuario.trim().toLowerCase();
//   escolhaUsuario = escolhaUsuario.charAt(0).toUpperCase() + escolhaUsuario.slice(1);

//   const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

//   let resultado = '';

//   if (escolhaUsuario === escolhaComputador) {
//     resultado = 'Empate!';
//   } else if (
//     (escolhaUsuario === 'Pedra' && escolhaComputador === 'Tesoura') ||
//     (escolhaUsuario === 'Papel' && escolhaComputador === 'Pedra') ||
//     (escolhaUsuario === 'Tesoura' && escolhaComputador === 'Papel')
//   ) {
//     resultado = 'Você venceu! ';
//   } else if (opcoes.includes(escolhaUsuario)) {
//     resultado = 'Você perdeu! ';
//   } else {
//     resultado = 'Opção inválida! Escolha entre Pedra, Papel ou Tesoura.';
//   }

//   console.log(`\nVocê escolheu: ${escolhaUsuario}`);
//   console.log(`Computador escolheu: ${escolhaComputador}`);
//   console.log(`Resultado: ${resultado}`);

//   rl.close();
// });



// const prompt = require('prompt-sync')();

// const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// let tentativa = 0; 
// let palpite = 0;  

// console.log(" Bem-vindo ao Jogo de Adivinhação!");
// console.log("Tente adivinhar o número entre 1 e 100.\n");

// while (palpite !== numeroSecreto) {
 
//   palpite = Number(prompt("Digite seu palpite: "));
//   tentativa++;

//   if (palpite === numeroSecreto) {
//     console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativa} tentativas!`);
//   } else if (palpite < numeroSecreto) {
//     console.log("⬆️ O número secreto é MAIOR. Tente novamente!\n");
//   } else {
//     console.log("⬇️ O número secreto é MENOR. Tente novamente!\n");
//   }
// }


// const prompt = require("prompt-sync")();

// let aprovados = [];

// for (let i = 1; i <= 3; i++) {
//   let nome = prompt(`Digite o nome do ${i}º aluno: `);
//   let nota = parseFloat(prompt(`Digite a nota de ${nome}: `));

//   if (nota >= 7) {
//     aprovados.push(nome); 
//   }
// }

// console.log("\n🎓 Alunos aprovados:");
// console.log(aprovados);

//======================================================================ATV2========================================================================

// let fila = [];

// fila.push("João");
// console.log("João entrou na fila:", fila);

// fila.push("Maria");
// console.log("Maria entrou na fila:", fila);

// fila.push("Pedro");
// console.log("Pedro entrou na fila:", fila);

// if (fila.length > 2) {
//   fila.shift();
//   console.log("Atendimento realizado, próximo da fila entrou.");
// }

// console.log("Fila atual:", fila);

//=================================================================atv3=============================================================

// let carrinho = [`Arroz`, `Feijão`];

// carrinho.unshift(`Macarrão`);

// carrinho.pop();

// if (carrinho.length >= 2) {
//     console.log(`Carrinho cheio.`);
// }

// console.log("Carrinho atual:", carrinho);

//===================================================================ATV4========================================================================

// let materias = ['Português', 'Matemática', 'História'];

// materias.splice(2, 1, 'Geografia');

// if (materias.includes('Geografia')) {
//     console.log('Matéria substituída com sucesso!');
// } else {
//     console.log('Erro ao atualizar a lista.');
// }

// console.log("Lista atual:", materias);

//=======================================================================================ATV5==============================================

// let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];

// if (frutas.includes('Manga')) {
//     console.log('Temos Manga no estoque!');
// } else {
//     console.log('Manga não disponível.');
// }

// console.log("Estoque atual:", frutas);

//=================================================================================================ATV6===================================

// let espera = ['Carlos', 'Ana'];

// espera.push('João');

// if (espera.length > 3) {
//     espera.shift ();
//     console.log('Primeiro da fila atendido');
// } else if (espera.length === 3) {
//     console.log('Fila completa.');
// } else {
//     console.log('Ainda há vagas na fila.');
// }

// console.log("FIla atual:", espera);

//======================================================ATV7===============================================

// let numeros = [1, 2, 3, 4, 5, 6];
// let pares = [];
// let impares = [];

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     pares.push(numeros[i]);
//   } else {
//     impares.push(numeros[i]);
//   }
// }

// console.log("Números pares:", pares);
// console.log("Números ímpares:", impares);
 

//=======================================================ATV8=============================================================================

// let produtos = ['Arroz', 'Feijão', 'Leite', 'Açúcar'];

// console.log("Estoque inicial:", produtos);

// let indiceLeite = produtos.indexOf('Leite');

// if (indiceLeite !== -1) {
//   produtos.splice(indiceLeite, 1);
//   console.log("'Leite' removido do estoque.");
// }

// if (produtos.length > 2) {
//   console.log("Estoque suficiente.");
// } else {
//   console.log("Estoque baixo!");
// }

// console.log("Estoque atual:", produtos);

//=======================================================================ATV9========================================================

// let convidados = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];

// console.log("Lista completa de convidados:", convidados);

// let convidadosVIP = convidados.slice(0, 3);

// if (convidados.length > 3) {
//   console.log("Apenas os três primeiros foram convidados para o jantar VIP.");
// } else {
//   console.log("Todos foram convidados.");
// }

// console.log("Convidados VIP:", convidadosVIP);

//====================================================================ATV10=================================================================

// let participantes = [];

// participantes.push("Ana");
// participantes.push("Bruno");
// participantes.push("Carlos");
// participantes.push("Diana");

// console.log("Lista de participantes:", participantes);

// if (participantes.length > 3) {
//   participantes.pop();
//   console.log("Número máximo de participantes atingido. O último foi removido.");
// } else {
//   console.log("Ainda há vagas disponíveis.");
// }

// console.log("Participantes atuais:", participantes);



