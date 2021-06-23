
/* Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou nao votar esse ano (não é necessário considerar o mês em que a pessoa nasceu).*/

var atual = parseInt(prompt('Digite o ano atual: '))
var nasc = parseInt(prompt("Ano de Nascimento: "))
var idade = atual - nasc
alert('Quem nasceu em ' + nasc +  ' tem ' + idade + ' anos em ' + atual)
if (idade > 16){
    alert ('Você ainda nao pode votar.')
} 
else if (idade >= 16) {
    alert ('O voto é opcional')
}
if (idade >= 18){
    alert("Você deve votar ")
}
