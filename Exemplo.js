
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

var lA = parseInt(prompt('Lado A: '))
var lB = parseInt(prompt('Lado B: '))

console.log('Area ' + calculaarea(lA,lB))
console.log('Quadrado? ' + verificaQuadrado(lA,lB))
console.log('Perímetro = ' + calculaPerimetro(lA,lB))