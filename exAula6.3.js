
        /* Crie um procedimento para entrar com os dados de ladoA e ladoB de um retângulo em variaveis globais. 
        Crie funcoes para : 
        - Informar a area do retângulo
        - Infmormar se o mesmo é um quadrado */

var ladoA
var ladoB


function calculaarea(ladoA,ladoB){
    let resultado = ladoA *ladoB
    return resultado
}

function verificaQuadrado(ladoA, ladoB){
    if (ladoA == ladoB){
        return true
    }
    else{
        return false
    }
}

function calculaPerimetro(ladoA,ladoB){
    return 2*(ladoA + ladoB) 
}

lA = parseInt(prompt('Lado A: '))
lB = parseInt(prompt('Lado B: '))

alert('Area ' + calculaarea(lA,lB))
alert('Quadrado? ' + verificaQuadrado(lA,lB))
alert('Perímetro = ' + calculaPerimetro(lA,lB))
