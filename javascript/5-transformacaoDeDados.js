// Transformação de dados para testes

// trim() remove espaços no início e no fim.
// Muito útil ao validar textos extraídos de uma página.
const nomeDaPagina = '  Zelda  '
const nomeLimpo = nomeDaPagina.trim()

console.log('Nome original:', nomeDaPagina)
console.log('Nome limpo:', nomeLimpo)
console.log('Tamanho do nome limpo:', nomeLimpo.length)

// Métodos de string retornam um novo valor e não alteram o original.
console.log('Original preservado:', nomeDaPagina)

// Normalização de caixa para comparar textos sem diferença entre maiúsculas e minúsculas.
const nomeDigitado = 'LINK'
const nomeEsperado = 'Link'

console.log('Comparação direta:', nomeDigitado === nomeEsperado) // false
console.log(
	'Comparação ignorando caixa:',
	nomeDigitado.toLowerCase() === nomeEsperado.toLowerCase()
) // true

// split(), reverse() e join() formatam uma data recebida de uma API.
// Lembrando que o reverser inverte a ordem dos elementos de um array original.
const dataIso = '2027-03-14'
const dataFormatada = dataIso.split('-').reverse().join('/')

console.log('Data formatada:', dataFormatada) // 14/03/2027

// replace() troca a primeira ocorrência; replaceAll() troca todas.
console.log('Com replace():', 'Zelda-Link-Shulk'.replace('-', '/')) // Zelda/Link-Shulk
console.log('Com replaceAll():', 'Zelda-Link-Shulk'.replaceAll('-', '/')) // Zelda/Link/Shulk

// Limpeza de preço exibido na página e conversão para número.
const precoNaPagina = 'R$ 2.450,75'
const precoComoNumero = Number(
	precoNaPagina.replace('R$ ', '').replaceAll('.', '').replace(',', '.')
)

console.log('Preço como número:', precoComoNumero) // 2450.75
console.log('Preço correto:', precoComoNumero === 2450.75) // true

// slice() extrai partes específicas de uma string.
console.log('Ano:', dataIso.slice(0, 4)) // 2026
console.log('Dia:', dataIso.slice(-2)) // 27

// String() é uma forma segura de converter valores para texto.
const quantidade = 108
console.log('Quantidade como texto:', String(quantidade))
console.log('Tipo:', typeof String(quantidade)) // string
