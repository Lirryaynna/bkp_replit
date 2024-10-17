/**
 * funções são blocos de código que podem ser reutilizados
 * funções podem receber parametros
 * funções podem retornar valores ou nao
 * fuções podem ser anônimas
 */
//declação de função
function dizOla() {
  alert('ola')
}
function olapessoal(nome) {
  alert('ola,' + nome)
}
const nome = ' marina '
const sobronome = ' silva '
const idade = ' 20 '
function dadospessoas() {
  const dados = nome + sobronome + idade
  console.log(dados)
}
//invocaçao de função

dizOla()
olapessoal('joao')
dadospessoas()

//declação de função