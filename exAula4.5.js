
/* A partir do ano fornecido pelo usuário, escrever um programa que diga se o ano é bissexto.*/


var ano = parseInt(prompt('Qual ano quer analisar? Coloque 0 para analisar o ano atual: '))
if (ano ==0)
    ano = '2021'
if (ano % 4 == 0 && ano %100 != 0 || ano % 400 == 0){
    alert('O ano ' + ano + ' é BISSEXTO')
}
else{
    alert ('O ano ' + ano + ' não é BISSEXTO')
}
