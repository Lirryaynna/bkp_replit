//LOCALIZAR ELEMENTOS DO HTML
//CRIAR: EMAIL/TELEFONE / IDADE /SEXO
const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const idade = document.getElementById('idade')
const sexo = document.getElementById('sexo')

//criar variaveis
const novoNome = 'Tiago'
const novoSobrenome = 'Olivera'
const novoEmail = 'tiago.olivera@gmail.com'
const novoTelefone = '41 995522447'
const novaIdade = '17'
const novoSexo = 'masculino'

//atribuir valores ao html com os valores 
//das nossas variaveis (innertext/innerHTML)
nome.innerText = novoNome
sobrenome.innerText = novoSobrenome
email.innerText = novoEmail
telefone.innerText = novoTelefone
idade.innerText = novaIdade
sexo.innerText = novoSexo