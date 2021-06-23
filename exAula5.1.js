        // Escreva um programa para que sejam informados 10 numeors inteiros. O programa deve informar o menor e o maior valor informado.

var maior
var menor
var numero = parseInt(prompt('Número: '))

maior = numero
menor = numero

for(var i=0;i<9;i++){
    var numero = parseInt(prompt('Número'))
    if (numero > maior){
        maior = numero
    }
else if(numero <menor){
    menor = numero
}
}
alert('Maior: ' + maior)
alert('Menor: ' + menor)
