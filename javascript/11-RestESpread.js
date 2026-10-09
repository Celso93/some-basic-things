/*
... 
spread demonsta algo. rest junta coisas.
*/

/*
spread em arrays
desmonta o array numbers dentro de um novo array
*/ 

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8];
const semSpreadNumberArray = [numbers, 6, 7, 8];
console.log(`numbers original: ${numbers}`)
console.log(`newNumbers com spread aplicado: ${newNumbers}`)
console.log(semSpreadNumberArray) // se você passar dentro de uma string igual ao exemplo acima você não conseguira visualizar o array, pois ele será convertido em string. Para visualizar o array, você pode usar console.log(semSpreadNumberArray) sem interpolação de string.

// juntando arrays com spread
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = [...numbers1, ...numbers2];
console.log(`combinedNumbers: ${combinedNumbers}`);


/*
CÓPIA DE ARRAY: ATRIBUIÇÃO (=) x SPREAD (...)
- const copia = lista → NÃO copia: os dois nomes apontam para o MESMO array (mesma referência na memória). Mexer em um muda o outro.
- const copia = [...lista] → cria um array NOVO (outro local na memória), com os itens que a lista tinha naquele momento. Depois disso, são independentes.
- Cuidado: a cópia é rasa. Se os itens forem objetos, o array é novo, mas os objetos dentro continuam compartilhados.
*/

const teste = [1, 2, 3, 4]
const testeSemSpread = teste        // mesma referência
teste.push(5)
console.log(testeSemSpread)         // [1, 2, 3, 4, 5]  ← mudou junto

const testeCom = [...teste]         // array novo, "foto" do momento: [1, 2, 3, 4, 5]
teste.push(7)
console.log(teste)                  // [1, 2, 3, 4, 5, 7]
console.log(testeSemSpread)         // [1, 2, 3, 4, 5, 7]  ← acompanha o original
console.log(testeCom)               // [1, 2, 3, 4, 5]     ← não foi afetado

/*
spread em objetos
*/

const person = {
  name: 'John',
  age: 30
};

const newPerson = {
  ...person,
  city: 'New York'
};

console.log(person);
console.log('newPerson: ', newPerson);

/*
Sobreescrevendo propriedades com spread
O posterior sempre vence
*/

const updatedPerson = {
  ...person,
  age: 31
};

console.log('updatedPerson: ', updatedPerson);

/*-----------------------------------------------*/
console.log('------------------- REST -------------------');

/*
Em funções, o REST é usado para agrupar argumentos em um array.
*/

// arrow function com REST
const exemploRest = (...args) => {
  console.log(args);
};

exemploRest(1, 2, 3, 4, 5)

// usado também na desestruturação de arrays e objetos
const [primeiroIndex, segundoIndex, ...resto] = [10, 20, 30, 40, 50];
console.log(primeiroIndex);
console.log(segundoIndex);
console.log(resto);

const dadosUsuario = {
  nome: 'Alice',
  idade: 25,
  cidade: 'São Paulo',
  profissao: 'Engenheira'
};

const { nome, ...outrosDados } = dadosUsuario;
console.log(nome);
console.log(outrosDados);

/*
Como diferencia-los ? 
- ... à direita do = ou dentro dos argumentos de uma chamada, é spread desmontando algo. 
- ... à esquerda ou em uma lista de parâmetros de uma função, é rest juntando coisas.
*/


/*
Exemplo em testes

Alterando informações de uma MASSA de dados.
Usando o spread para alterar ou adicionar um valor especifico.
E Rest para desestruturar e remover um valor especifico.

import { test, expect } from '@playwright/test'

const frutaPadraoExemplo = {
  nome: 'Maçã',
  tamanho: 'Pequena',
  ativa: true,
  fornecedor: 'fornecedor@frutasexemplo.com',
}

test('cadastra uma fruta grande', async ({ request }) => {
  const resposta = await request.post('/api/frutas', {
    data: { ...frutaPadraoExemplo, tamanho: 'Grande' },
  })
  expect(resposta.status()).toBe(201)
})

test('cadastra uma fruta inativa', async ({ request }) => {
  const resposta = await request.post('/api/frutas', {
    data: { ...frutaPadraoExemplo, ativa: false },
  })
  expect(resposta.status()).toBe(201)
})

test('rejeita uma fruta sem fornecedor', async ({ request }) => {
  const { fornecedor, ...semFornecedor } = frutaPadraoExemplo   // rest: tudo, menos o fornecedor
  const resposta = await request.post('/api/frutas', { data: semFornecedor })
  expect(resposta.status()).toBe(400)
})

funcao CONSTRUTORA!

const frutas = (overrides = {}) => ({
  nome: 'Banana',
  tamanho: 'Pequena',
  ativa: true,
  ...overrides,
})

frutas()                     cria uma fruta padrão
frutas({ nome: 'Laranja' })  cria uma fruta padrão, mas sobrescreve o nome
frutas({ madura: true })    cria uma fruta padrão, mas adiciona a propriedade madura

Nesse caso o as chaves posteriores vencem, então o spread PRECISA vir por último para que os valores de quem chama sobrevivam. É um bug real, que chega a repositórios reais, e é silencioso.

*/
