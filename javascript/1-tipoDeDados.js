console.log("Teste de tipos de dados em JavaScript");

// Tipos de dados primitivos
// Aprenda os tipos e a maioria das supresas da linguagem deixa de ser supresa.
// Primitivos
console.log('String')
console.log('Number', 42)
console.log('Boolean', true)

console.log('Undefined', undefined) 
// valor de algo que existe mas nunca recebeu um valor
// ninguem preencheu isso
// Se uma api retorna undefined, significa que o campo não foi enviado. Se o campo foi enviado, mas não tem valor, a API deve retornar null.

console.log('Null', null) 
// definido como nada
// alguém preencheu isso com nada

console.log(0.1 + 0.2) // 0.30000000000000004, nunca verifique o resultado exato de uma conta com decimais.

/*
Se a API retorna "phone": null, o campo foi enviado, mas o cliente não tem um telefone cadastrado. 
Se phone não aparece na resposta, o valor será undefined, indicando que a API não incluiu essa informação. 
Como cada caso pode causar um problema diferente, é importante identificá-los separadamente.
*/

// Tipos Estruturais
// Guarda vários valores em uma estrutura
// Array é uma lista ordenada de valores, que podem ser de tipos diferentes
const exemploArray = [1, 2, 3, 4, 5]
console.log('Array', exemploArray)
console.log('Array', exemploArray[0])
console.log('Metodo em array', exemploArray.length) 

// . Em testes, um array costuma ser uma lista de linhas, uma lista de entradas ou uma lista de valores esperados.

// Collection ou colecao
// Valores nomeados, que podem ser de tipos diferentes em pares chave: valor
const exemploCollection = {
  nome: 'João',
  idade: 30
}
console.log('Collection', exemploCollection)
console.log('Acessando o nome', exemploCollection.nome)
console.log('Acessando a idade', exemploCollection.idade)

// Arrays e objetos se aninham livremente: um array de objetos de cliente é o formato mais comum que você vai encontrar.
const exemplosObjetosAninhadosEmArrays = [
  { nome: 'Marcio', idade: 25 },
  { nome: 'Mario', idade: 30 },
]
console.log('Acessando um objeto dentro de um array:', exemplosObjetosAninhadosEmArrays[0].nome)

// Function
// Bloco de código reutilizavel
// Funcoes sao um tipo de dados e um valor como qualquer outro.
function exemploFunction() {
  return 'Função executada'
}

console.log('Retorno da função:', exemploFunction())

/*
O fato de uma função ser um valor é a ideia mais importante deste curso. É o que permite passar uma função para o it(), para o beforeEach() e para o forEach().
*/

// typeof: diz o tipo de um valor
console.log(typeof 'Acme')
console.log(typeof 42)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof { name: 'Acme' }) // retorna object
console.log(typeof [1, 2, 3]) // retorna object, mas nao array
console.log(typeof null) // retorna object, mas null não é um objeto. É um bug histórico do JavaScript.

// para checkar se é um array, use Array.isArray()
console.log(Array.isArray([1, 2, 3])) // true
console.log(Array.isArray({ name: 'Acme' })) // false

// checkar null, use === null
console.log(null === null) // true
console.log(null === undefined) // false


/*
Quando um valor passa a ter outro tipo, o erro pode ser difícil de perceber: ao exibi-los, a string 'true' e o booleano true parecem iguais. Detectar essa diferença só mais tarde pode dar bastante trabalho.
*/
it('devolve um cliente bem estruturado', async ({ request }) => {
  const response = await request.get('/api/customers/1')
  const customer = await response.json()

  expect(typeof customer.name).toBe('string') // Consulta se o valor e string
  expect(typeof customer.active).toBe('boolean') // Consulta se o valor e boolean
  expect(Array.isArray(customer.contacts)).toBe(true) // Consulta se o valor e um array
})

