/*
Iteradores de Array

O QUE SÃO:
    Funções de ordem superior (forEach, map, filter, find, some, every) que substituem laços 'for' tradicionais ao processar arrays.

2. PRINCIPAIS MÉTODOS:
   - forEach: Executa uma ação por item (não retorna valor).
   - map: Mapeia e transforma itens em um novo array de mesmo tamanho.
   - filter: Filtra e retorna um novo array com os itens que passam na condição.
   - find: Retorna o primeiro elemento encontrado ou undefined (atenção ao TypeError).
   - some: Retorna true se pelo menos um item atender ao critério.
   - every: Retorna true apenas se TODOS os itens atenderem ao critério (retorna true para array vazio).

3. IMPORTÂNCIA PARA AUTOMAÇÃO DE TESTES (QA):
   - Testes Orientados a Dados (Data-Driven Testing): Iterar arrays de massa de dados (ex: e-mails inválidos ou parâmetros) para gerar suítes de testes sem duplicar código.
   - Validação de Listas e UI: Transformar elementos da tela (DOM/Cypress) em dadose validar propriedades de múltiplos elementos de uma só vez.
   - Asserções em Respostas de API: Verificar regras de negócio em contratos JSON (ex: garantir com `every` que todos os itens do payload correspondem ao filtro requisitado).
   - Prevenção de Falsos Positivos: Entender comportamentos de borda (como `[].every()` ser true) para evitar testes que passam sem validar nada de fato.
*/

// Exemplo de iteradores de array usando uma lista de frutas (foco em automação de QA)

const fruits = [
  { name: 'Maçã', color: 'Vermelha', pricePerKg: 8.50, inStock: true },
  { name: 'Banana', color: 'Amarela', pricePerKg: 5.00, inStock: false },
  { name: 'Laranja', color: 'Laranja', pricePerKg: 4.20, inStock: true },
  { name: 'Uva', color: 'Roxa', pricePerKg: 12.00, inStock: true },
]

// 1. forEach: Roda uma ação por item sem retornar valor
// Utilidade em QA: Executar requisições de teste para cada item da massa de dados
const invalidFruitNames = ['m', '123', '']
invalidFruitNames.forEach((fruitNameParameter) => {
  // Simula o envio do nome da fruta em um formulário de cadastro
  console.log(`Testando validação de campo com o valor inválido: "${fruitNameParameter}"`)
})

// 2. map: Transforma cada elemento e retorna um NOVO array com o mesmo número de itens
// Utilidade em QA: Extrair apenas as propriedades necessárias da UI/API para facilitar asserções
const fruitNamesList = fruits.map((fruitObjectParameter) => {
  return fruitObjectParameter.name
})
console.log(fruitNamesList) // Resultado: ['Maçã', 'Banana', 'Laranja', 'Uva']

// 3. filter: Retorna um novo array contendo APENAS os itens que atendem à condição (true)
// Utilidade em QA: Filtrar a massa de dados para testar comportamentos específicos (ex: estoque)
const availableFruitsList = fruits.filter((fruitObjectParameter) => {
  return fruitObjectParameter.inStock === true
})
console.log(availableFruitsList) // Resultado: Array apenas com Maçã, Laranja e Uva

// 4. find: Busca e retorna o PRIMEIRO elemento que atende à condição (ou undefined se não existir)
// Utilidade em QA: Localizar um registro específico pelo identificador/nome para validar detalhes
const searchedFruit = fruits.find((fruitObjectParameter) => {
  return fruitObjectParameter.name === 'Laranja'
})
console.log(searchedFruit) // Resultado: { name: 'Laranja', color: 'Laranja', pricePerKg: 4.20, inStock: true }

// 5. some: Retorna um valor booleano (true/false) se PELO MENOS UM item atender à regra
// Utilidade em QA: Checar rapidamente se existe algum estado indesejado ou específico na lista
const hasOutOfStockFruit = fruits.some((fruitObjectParameter) => {
  return fruitObjectParameter.inStock === false
})
console.log(hasOutOfStockFruit) // Resultado: true (pois a Banana está fora de estoque)

// 6. every: Retorna true APENAS se TODOS os itens da lista atenderem à regra
// Utilidade em QA: Validar regras de contrato de API (ex: garantir que todas as frutas custam mais de R$ 3,00)
const areAllFruitsAffordable = fruits.every((fruitObjectParameter) => {
  return fruitObjectParameter.pricePerKg > 3.00
})
console.log(areAllFruitsAffordable) // Resultado: true