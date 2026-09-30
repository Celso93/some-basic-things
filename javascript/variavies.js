// Variaveis
console.log('Variavel é um nome pra um valor')
// javascript tem 3 maneiras de declarar variaveis: var, let e const mas so precisa saber de duas delas.

const nome = 'zelda' // const é uma variavel que nao pode ser reatribuida
// nome = 'link' // isso vai dar erro, pois nao pode reatribuir uma const

let idade = 30 // let é uma variavel que pode ser reatribuida
// use para contador, total acumulado um valor atribuido em um if.

// usado antres de 2015 e vc deve evitar usalo
var sobrenome = 'the legend'
// var escapam do seus blocos, o que pode gerar bugs. Evite usar var.
// Ele permite redeclarar o mesmo nome

if (true) {
  var leaks = 'eu escapei do bloco'
  let stays = 'eu não nao escapei do bloco'
}

console.log(leaks)
// console.log(stays)

// A regra para o resto da sua carreira: use const por padrão, let quando precisar reatribuir e var nunca.

// Guardando array e objetos em variaveis
// const protege o nome, nao o conteudo.
// const significa que o nome sempre se refere ao mesmo array, não que o array sempre tem os mesmos itens.

const exemploArray = [1, 2, 3]
exemploArray.push(4) // isso é permitido, pois o array ainda é o mesmo
console.log(exemploArray)

const exemploCollection = { nome: 'João', idade: 30 }
exemploCollection.idade = 31 // isso é permitido, pois o objeto ainda é o mesmo
console.log(exemploCollection)

/*A razão é que uma variável de array ou de objeto não guarda os dados. Ela guarda uma referência aos dados, um pouco como o endereço de uma casa. O const congela o endereço escrito no papel. Quem tem esse endereço ainda pode repintar a casa.

magine uma variável como um atalho para um documento. Com const, você não pode trocar o atalho para apontar a outro documento, mas ainda pode editar o conteúdo daquele que ele abre. Com arrays e objetos, é parecido: const impede trocar a referência, não alterar os dados.

*/

// Tornando imutavel
const exemploArrayImutavel = Object.freeze([1, 2, 3])
exemploArrayImutavel.push(4) // isso não é permitido, pois o array é imutavel
console.log(exemploArrayImutavel)

// objetos aninhados podem ser congelados com Object.freeze() também, mas isso não é recursivo. Para congelar objetos aninhados, você precisa congelar cada objeto individualmente.

/*
const VALID_EMAIL = 'exemplo1@example.com'
const INVALID_EMAIL = 'exemplo2@example'

it('faz login com um e-mail válido', () => {
  cy.get('#email').type(VALID_EMAIL)
  // ...
})

it('mostra um erro para um e-mail inválido', () => {
  cy.get('#email').type(INVALID_EMAIL)
  // ...
})

O nome em SCREAMING_SNAKE_CASE é uma convenção, não uma regra. Ele diz para quem lê: este é um valor fixo definido no topo do arquivo, não algo calculado aqui.

*/