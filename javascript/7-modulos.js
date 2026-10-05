/*
CONCEITOS
- Módulo = um arquivo. Tudo é privado até exportar (export) e importar (import).
- Import: "./" e ".js" obrigatórios; nomes entre chaves iguais ao exportado.
- ES Modules (import/export) = moderno x CommonJS (require/module.exports) = antigo
- Ativar ES Modules: package.json com { "type": "module" } (sem isso: SyntaxError: Cannot use import statement outside a module).
- Nomeada: várias por arquivo, importa com chaves (preferida).
  Padrão (default): uma por arquivo, importa sem chaves, com qualquer nome.
- Testes: helpers e massa em arquivos próprios (ex.: support/); o teste importa, nunca define.
- Exporte a função construtora, não o objeto pronto.
*/

/* 
2. EXPORT / IMPORT
você pode exportar no início do arquivo: export const testeRapidoDeImpotacao = "teste rápido de importação" (Evitar) ou, no fim do arquivo: export { PERFIL_PADRAO_EXEMPLO, funcaoExemploMontaLogin }

Exemplo de main.js
import { funcaoExemploMontaLogin, PERFIL_PADRAO_EXEMPLO } from './arquivoAjudaUm.js'
/

/* 
3. SUÍTE DE TESTE
support/massaExemplo.js
export const funcaoExemploMontaUsuario = (nomeUsuario, perfilUsuario) =>
  ({ nomeUsuario, perfilUsuario, ativo: true })

support/acoesExemplo.js (senha vem de fora do código)
export const funcaoExemploFazLogin = () => {
  cy.visit('/login')
  cy.get('#email').type('mariana@sistemaexemplo.com')
  cy.env(['SENHA_USUARIO']).then(({ SENHA_USUARIO }) => {
    cy.get('#senha').type(SENHA_USUARIO, { log: false })
  })
  cy.get('#entrar').click()
}

e2e/cadastroExemplo.cy.js  ("../" = subir uma pasta)
import { funcaoExemploFazLogin } from '../support/acoesExemplo.js'
import { funcaoExemploMontaUsuario } from '../support/massaExemplo.js'

describe('Cadastro de usuários', () => {
  beforeEach(() => funcaoExemploFazLogin())
  it('cria um usuário', () => {
    cy.request('POST', '/api/usuarios', funcaoExemploMontaUsuario('Mariana', 'comum'))
  })
})
/

/* 
4. OBJETO COMPARTILHADO (EXECUTÁVEL)

Objeto pronto: mesma referência para todos
const usuarioExemploPronto = { nomeUsuario: 'Mariana', perfilUsuario: 'comum' }
const usuarioTesteUm = usuarioExemploPronto
const usuarioTesteDois = usuarioExemploPronto
usuarioTesteUm.perfilUsuario = 'admin'
console.log('Compartilhado:', usuarioTesteDois)   // 'admin' (vazou)

Função construtora: objeto novo a cada chamada
const funcaoExemploMontaUsuario = (nomeUsuario, perfilUsuario) => ({ nomeUsuario, perfilUsuario })
const usuarioNovoUm = funcaoExemploMontaUsuario('Mariana', 'comum')
const usuarioNovoDois = funcaoExemploMontaUsuario('Mariana', 'comum')
usuarioNovoUm.perfilUsuario = 'admin'
console.log('Independente:', usuarioNovoDois)
const testeRapidoDeImpotacao = "teste rápido de importação"
*/

const testeRapidoDeImpotacao = "teste rápido de importação"

const PERFIL_PADRAO_EXEMPLO = 'comum'
function funcaoExemploMontaLogin(nomeUsuario) {
  return `${nomeUsuario}@sistemaexemplo.com`
}


export { 
  testeRapidoDeImpotacao, funcaoExemploMontaLogin 
}