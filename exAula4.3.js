/* Escreva um Algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente
em graus Celsius.*/


var temp= parseFloat(prompt('Informe a Temperatura em °C: '))
var f = temp * 1.8 + 32
var k = temp * 273.15 + temp

alert ( ' A temperatura de' + temp+'°C corresponde a ' + f+ '°F e '+ k +'°K.')
