// Operadores Aritméticos
let a = 10;
let b = 5;

// Adição
let soma = a + b; // 15
console.log('Soma:', soma);

// Operadores de atribuição
let contador = 0;
contador += 1;
contador += 5;
contador -= 2;
console.log('Contador:', contador); // 4

// Operadores matemáticos
console.log('Subtração:', a - b); // 5
console.log('Multiplicação:', a * b); // 50
console.log('Divisão:', a / b); // 2
console.log('Resto da divisão:', 10 % 3); // 1

// O + pode somar números ou juntar textos
console.log('Texto + número:', '2' + 3); // '23'
console.log('Número + número:', 2 + 3); // 5

// Comparação frouxa (==) converte os tipos antes de comparar
const codigoComoTexto = '200';
console.log('200 == 200:', codigoComoTexto == 200); // true
console.log('200 === 200:', codigoComoTexto === 200); // false
// A regra é simples e não tem exceção que valha a pena aprender agora: use sempre === e !==


// Comparação estrita corrigida com conversão explícita
console.log('Number(200) === 200:', Number(codigoComoTexto) === 200); // true

// Comparadores sempre produzem true ou false
console.log('10 > 3:', 10 > 3);
console.log('10 <= 3:', 10 <= 3);
console.log('42 !== 10:', 42 !== 10);

// Operadores lógicos
const statusCode = 200;
const nomeCliente = 'Zelda';

const respostaValida = statusCode === 200 && nomeCliente !== '';
console.log('Resposta válida:', respostaValida); // true

console.log('Status aceito:', statusCode === 200 || statusCode === 201);
console.log('Nome vazio:', nomeCliente === '');
console.log('Nome preenchido:', !(nomeCliente === ''));