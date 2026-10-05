/*
Funcoes sao blocos de codigo que podem ser reutilizados em diferentes partes do programa.
Testes são funcoes passadas como argumento para outras funcoes.
*/

// Declaração de função com return.
function funcaoExemploMontaEmail(nomeUsuario) {
    return `${nomeUsuario}@empresaexemplo.com`;
}
console.log(funcaoExemploMontaEmail("ana"));

// funcao sem retorno da undefined
const exemploSemRetorno = function funcaoSemRetorno() {
    console.log("Isso é uma função sem retorno");
}
console.log(exemploSemRetorno());

/*
lembrar que console.log() é usado para exibir mensagens no console 
quando vc atribui o resultado de uma função a uma variável, vc está atribuindo undefined a essa variável
*/

// funcao com valor padrao
function funcaoComValorPadrao(parametro = "valor padrão") {
    return `Isso é uma função com valor padrão: ${parametro}`;
}
console.log(funcaoComValorPadrao());
console.log(funcaoComValorPadrao("outro valor"));

/* 
arrow function
vc vai ver muito em teste moderno, pois é uma forma mais enxuta de escrever funções
*/
const arrowFunctionExemplo = (parametro) => { return `Isso é uma arrow function com o parâmetro: ${parametro}`;}
console.log(arrowFunctionExemplo("exemplo"));

// Retorno implícito: sem chaves, a expressão é devolvida automaticamente.
// Com chaves, é preciso escrever return; sem ele, o resultado é undefined.
const funcaoExemploDobraErrada = (numeroUm) => { numeroUm * 2; };
const funcaoExemploDobraCerta = (numeroUm) => numeroUm * 2;
console.log(funcaoExemploDobraErrada(3)); // undefined
console.log(funcaoExemploDobraCerta(3)); // 6

// Imprimir mostra um valor, mas não o devolve para quem chamou a função.
function funcaoExemploGrita(textoUm) {
    console.log(textoUm.toUpperCase());
}
const resultadoUm = funcaoExemploGrita("cadastro");
console.log(resultadoUm); // undefined

// Parâmetro padrão: usado quando o argumento não é informado.
const funcaoExemploMontaEmailPadrao = (nomeUsuario, dominioUm = "empresaexemplo.com") => `${nomeUsuario}@${dominioUm}`;
console.log(funcaoExemploMontaEmailPadrao("ana"));

// Função pura: mesma entrada, mesma saída, sem alterar valores externos.
const funcaoExemploPuraValidaCadastro = (nomeUsuario, emailUsuario) => nomeUsuario.length > 0 && emailUsuario.includes("@");
console.log(funcaoExemploPuraValidaCadastro("ana", "ana@exemplo.com"));

// Função impura: Date.now() faz a saída variar entre chamadas.
const funcaoExemploImpuraEmailUnico = (nomeUsuario) =>
    `${nomeUsuario}+${Date.now()}@empresaexemplo.com`;
console.log(funcaoExemploImpuraEmailUnico("ana"));

// Ordem superior recebe ou devolve outra função. A função recebida é um callback.
function funcaoExemploRodaCenario(nomeCenario, acaoCenario) {
    console.log(`Iniciando: ${nomeCenario}`);
    acaoCenario();
    console.log(`Finalizado: ${nomeCenario}`);
}
funcaoExemploRodaCenario("cadastra usuário", () => console.log("preenchendo formulário"));

function funcaoExemploCriaMontador(dominioUm) {
    return (nomeUsuario) => `${nomeUsuario}@${dominioUm}`;
}
const funcaoExemploMontaEmailEmpresa = funcaoExemploCriaMontador("empresaexemplo.com");
console.log(funcaoExemploMontaEmailEmpresa("ana"));

// Arrow function que devolve um objeto: os parênteses evitam confundir o objeto com o corpo.
const funcaoExemploMontaUsuario = (nomeUsuario, perfilUsuario) => ({
    nomeUsuario,
    perfilUsuario,
    ativo: true,
});
console.log(funcaoExemploMontaUsuario("ana", "aluna"));

/*
Em testes, o framework chama os callbacks no momento apropriado.
describe("Cadastro de usuários", () => {
     beforeEach(() => cy.visit("/usuarios/novo")); // passa uma função
     // beforeEach(cy.visit("/usuarios/novo")); // executa cy.visit imediatamente
 });

Helpers extraem passos repetidos, como login. Mantenha lógica de transformação

Função de ordem superior: função que recebe outra função (como parâmetro) ou devolve outra função (return).
Callback: função passada como argumento para outra função, que a chama depois.
Função pura: (1) mesma entrada sempre gera a mesma saída e (2) não altera nada fora de si (sem efeito colateral).
Função impura: função que quebra pelo menos uma das regras acima. Exemplos: gera saída que varia com a mesma entrada (Math.random(), Date.now(), ler variável externa que muda) ou altera algo externo (variável global, tela, banco).
*/
