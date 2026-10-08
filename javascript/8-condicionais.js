/* 
1. CONCEITOS

- Condicional: roda um trecho só quando a condição é verdadeira (usa os operadores de comparação, que dão true/false).
- if / else if / else: o primeiro ramo que bater vence; a ordem vai do mais específico ao menos específico.
- switch: compara com === (exato: '404' não casa com 404). "default" = else.
  Sem break a execução vaza para o próximo caso (útil só para agrupar).
  Só compara igualdade; faixas continuam pedindo else if.
- Falsy (só estes): false, 0, '', null, undefined, NaN. 
- O resto é truthy, inclusive [], {} e '0'. Para array use lista.length, nunca só lista.
- Ternário: condição ? valorSeVerdadeiro : valorSeFalso. É expressão, serve para escolher um valor. Evite aninhar.
- Em testes: ao redor do teste (ex.: URL por ambiente): aceitável dentro do teste: sinal de alerta (se o if for falso, nada é verificado e o teste passa sempre). Alternativas: esperar/retry, dois testes ou massa preparada, configuração por ambiente.
regra: o teste deve saber o que espera antes de rodar. 
exceção: contrato da API com dois formatos válidos (ex.: null ou objeto).
Verifique o campo sempre e use o if só nas checagens internas.
 */

/* 2. IF / ELSE IF / ELSE */
const codigoRespostaExemplo = 422

if (codigoRespostaExemplo >= 500) {
  console.log('Falha no servidor')
} else if (codigoRespostaExemplo >= 400) {
  console.log('Dados do cadastro inválidos')
} else if (codigoRespostaExemplo >= 200) {
  console.log('Cadastro concluído')
} else {
  console.log('Resposta inesperada')
}
// Se o ramo ">= 200" viesse primeiro, o 422 cairia nele (a ordem importa)

/* 3. SWITCH */
function funcaoExemploDescrevePerfil(perfilUsuario) {
  switch (perfilUsuario) {
    case 'admin':
      return 'Acesso total'
    case 'editor':
    case 'revisor':  // agrupados de propósito
      return 'Acesso de edição'
    default:
      return 'Acesso somente leitura'
  }
}
console.log(funcaoExemploDescrevePerfil('revisor'))

// Armadilha: sem break (ou return), o caso "vaza" para o próximo
switch ('basico') {
  case 'basico':
    console.log('Plano básico')
  case 'premium':
    console.log('Plano premium')
}

/* 4. TRUTHY / FALSY */
const nomeDigitadoExemplo = ''
console.log(nomeDigitadoExemplo ? 'Nome preenchido' : 'Nome vazio')   // Nome vazio

const usuariosEncontradosExemplo = []
console.log(Boolean(usuariosEncontradosExemplo))          // true  (armadilha: [] é truthy)
console.log(Boolean(usuariosEncontradosExemplo.length))   // false (jeito certo)

/* 5. TERNÁRIO */
const totalCadastrosExemplo = 4
console.log(`${totalCadastrosExemplo} cadastro${totalCadastrosExemplo === 1 ? '' : 's'} pendente${totalCadastrosExemplo === 1 ? '' : 's'}`)

/* 
6. EM TESTES (EXEMPLOS EM COMENTÁRIO) */
// Condicional ao redor do teste: configuração, decidida antes de rodar
const ambienteExemplo = 'homologacao'
const urlCadastroExemplo = ambienteExemplo === 'producao'
  ? 'https://sistemaexemplo.com/cadastro'
  : 'https://hml.sistemaexemplo.com/cadastro'
 *

  // Dentro do teste: nunca falha (sem a mensagem, nada é verificado)
cy.get('body').then(($paginaExemplo) => {
  if ($paginaExemplo.find('[data-testid="aviso-sucesso"]').length) {
    cy.get('[data-testid="aviso-sucesso"]').should('contain', 'Usuário criado')
  }
})

// Sempre verifica (o runner já tenta de novo até o elemento aparecer)
cy.get('[data-testid="aviso-sucesso"]').should('contain', 'Usuário criado')
