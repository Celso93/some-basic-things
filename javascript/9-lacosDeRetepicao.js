// for
const games = ['Xenoblade', 'Yakuza', 'Zelda']
for (let contador = 0; contador < games.length; contador++) {
  console.log(games[contador])
}

/* 
for...of
Quando você não se importa com o índice, só com o valor, use for...of.
Usado para itens de array
*/

for (const game of games) {
  console.log(`For...of exemplo: ${game}`)
}

/*
for...in
Quando você não se importa com o valor, só com o índice, use for...in.
Usado para propriedades de objeto
*/

const jogos = {
  rpg: 'Xenoblade',
  acao: 'Yakuza',
  aventura: 'Zelda'

}

// for (const key in object) { ... } itera sobre as chaves do objeto, não sobre os valores. Para pegar o valor, use object[key]
for (const genero in jogos) {
  console.log(`For...in exemplo: ${genero} - ${jogos[genero]}`)
}

/*array pede for...of, objeto pede for...in.*/

/*
While
O while roda enquanto a condição for verdadeira. Se a condição nunca for falsa, o loop é infinito.
*/

let contadorParaPararOWhile = 0
while (contadorParaPararOWhile < 3) {
  console.log(`While exemplo: ${contadorParaPararOWhile}`)
  contadorParaPararOWhile++
}

/*
break e continue
break sai do loop imediatamente, continue pula para a próxima iteração.
*/

const jogosParaTestar = ['Xenoblade', 'Yakuza', 'Zelda', 'Mario', 'Sonic', 'Donkey Kong', 'Kirby']
for (const jogo of jogosParaTestar) {
  if (!jogo.includes('Sonic')) {
    console.log(`Jogo testado: ${jogo}`)
    continue // pula para o próximo jogo, sem executar o break
  }
  break // sai do loop no primeiro jogo que não inclui 'Sonic'
}

/*
Exemplo acima é burro, mas serve para mostrar o uso de break e continue.
Ele só sai do loop quando o jogo inclui 'Sonic', e pula os jogos que não incluem 'Sonic'.
ou seja, ele só vai testar 'Xenoblade', 'Yakuza' e 'Zelda', e quando chegar em 'Mario', ele pula para o próximo jogo, que é 'Sonic', e aí ele sai do loop.
*/

/*
Onde é usados nos testes?
Muito comum em testes orientado a dados.
Exemplo:

const graus = ['ensino medio', 'graduacao', 'pos-graduado']

for (const escolaridade of graus) {
  it(`valida a opcao ${escolaridade}`, () => {
    cy.get('#escolaridade').select(escolaridade)
    cy.get('#submit').click()
    cy.contains('Cliente criado').should('be.visible')
  })
}
*/

