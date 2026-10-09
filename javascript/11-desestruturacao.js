/*
CONCEITOS
Desestruturação: extrai valores de um array ou objeto para variáveis.
Ganho principal: o código mostra, no topo, quais campos ele usa.
Não depende de métodos: só lê propriedades (por nome) ou posições.

Objeto (por nome): nomes entre chaves iguais às chaves do objeto.
Renomear: { chave: novoNome }. Padrão: { chave = valor } (só se undefined).
Aninhado: válido, mas ilegível rápido. Parar em um nível.
Array (por posição): o nome é escolha sua, a ordem é o que importa. Vírgula vazia pula uma posição. Combina com split.
Troca de valores: ;[a, b] = [b, a]  (o ";" evita a linha ser lida como continuação da anterior).
Em parâmetros: a função recebe o objeto inteiro, mas declara na assinatura os campos que usa.
Quem entrega o argumento é a função de fora (forEach, test, it...). Você só escreve o callback; as chaves no parâmetro escolhem o que pegar do que foi entregue. Elas não criam nem enviam nada.
Playwright: o test monta um objeto com todas as fixtures (page, request...) e chama o seu callback com ele. { page, request } pega só essas duas pelo nome; um nome que não existe no objeto vira undefined.
forEach: percorre e chama o callback por item. Não altera a lista (só o seu callback pode alterar, pois o item é o mesmo objeto, não cópia).
*/

/* OBJETO */
const usuarioExemplo = { nome: 'Carla', perfil: 'editor', ativo: true }

const { nome, perfil } = usuarioExemplo                         // por nome
const { nome: nomeCompletoExemplo } = usuarioExemplo            // renomeando
const { nome: nomeUm, plano = 'basico' } = usuarioExemplo       // padrão (plano não existe)
console.log(nome, perfil, nomeCompletoExemplo, plano)           // Carla editor Carla basico

/* ANINHADO (MANTER EM UM NÍVEL) */
const respostaExemplo = { codigo: 201, corpo: { usuario: { nome: 'Davi', perfil: 'leitor' } } }

// difícil de ler: const { codigo, corpo: { usuario: { nome } } } = respostaExemplo
// duas linhas claras
const { codigo, corpo } = respostaExemplo
const { nome: nomeAninhado } = corpo.usuario
console.log(codigo, nomeAninhado)                               // 201 Davi

/* ARRAY */
const [primeiroPerfil, segundoPerfil] = ['admin', 'editor', 'leitor']
const [ano, , dia] = ['2026', '10', '09']                       // pulou o mês
const [loginUsuario, dominioUsuario] = 'carla@sistemaexemplo.com'.split('@')
console.log(primeiroPerfil, segundoPerfil, ano, dia, loginUsuario, dominioUsuario)

/* TROCA DE VALORES */
let valorUm = 'cadastrado'
let valorDois = 'pendente'
;[valorUm, valorDois] = [valorDois, valorUm]
console.log(valorUm, valorDois)                                 // pendente cadastrado

/*EM PARÂMETROS */
const funcaoExemploDescreveUsuario = ({ nome, perfil }) => `${nome} tem perfil ${perfil}`
console.log(funcaoExemploDescreveUsuario(usuarioExemplo))       // usa só 2 dos 3 campos

/* FOREACH: QUEM ENTREGA O ITEM É A FUNÇÃO DE FORA */
const casosExemplo = [
  { perfil: 'leitor', menuEsperado: 'Somente consulta' },
  { perfil: 'admin', menuEsperado: 'Acesso total' },
]

// Sem desestruturar: o parâmetro recebe o item inteiro
casosExemplo.forEach((casoExemplo) => {
  console.log(casoExemplo.perfil, casoExemplo.menuEsperado)
})

// Desestruturando no parâmetro: mesma coisa, pegando os campos pelo nome
casosExemplo.forEach(({ perfil, menuEsperado }) => {
  console.log(perfil, menuEsperado)
})

/* 
SIMULANDO O PLAYWRIGHT 
A função de fora cria a "caixa" de ferramentas e a entrega ao seu callback
*/
function funcaoExemploTeste(tituloTeste, funcaoRecebida) {
  const ferramentasExemplo = {
    page: { goto: (url) => console.log(`abrindo ${url}`) },
    request: { post: (url) => console.log(`enviando para ${url}`) },
    browser: {},
  }
  funcaoRecebida(ferramentasExemplo)    // quem chama e entrega é a função de fora
}

// Você só escreve o callback e escolhe, pelo nome, o que pegar da caixa
funcaoExemploTeste('abre a lista de usuários', ({ page, request }) => {
  page.goto('/usuarios')
  request.post('/api/usuarios')
})

/* 
EM TESTES (EXEMPLOS EM COMENTÁRIO)

// Desempacotar a resposta da API
it('devolve o usuário criado', async ({ request }) => {
  const resposta = await request.post('/api/usuarios', { data: usuarioNovoExemplo })
  const { id, nome, perfil } = await resposta.json()

  expect(id).toBeTruthy()
  expect(nome).toBe('Carla')
  expect(perfil).toBe('editor')
})

// Testes orientados a dados (o it fica DENTRO do callback do forEach, por isso enxerga perfil e menuEsperado de cada rodada)
casosExemplo.forEach(({ perfil, menuEsperado }) => {
  it(`mostra "${menuEsperado}" para o perfil ${perfil}`, () => {
    cy.get('#perfil').select(perfil)
    cy.get('[data-testid="menu-acesso"]').should('have.text', menuEsperado)
  })
})

// Array em par (valor tirado de um texto)
cy.get('[data-testid="linha-usuario"]').invoke('text').then((textoLinha) => {
  const [nomeLinha, perfilLinha] = textoLinha.split(' | ')
  expect(nomeLinha.trim()).to.equal('Carla')
  expect(perfilLinha.trim()).to.equal('editor')
})
*/