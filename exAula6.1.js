
        /* Crie uma matriz 3x3, preencha com números inteiros e mostre o resultado e também a transposta desta matriz(trocando linha por coluna) */
        var matrizA = [[],[],[]]
var matrizB = [[],[],[]]


var transposta = [[],[],[]]

//preenchendo elemento a elemento
for(var linha=0;linha<3;linha++){
  for(var coluna=0;coluna<3;coluna++){
    matrizA[linha][coluna] = parseInt(Math.random()*100);
    matrizB[linha][coluna] = parseInt(Math.random()*100);
  }
}

//preenchendo a transposta da matrizA
for(var linha=0;linha<3;linha++){
  for(var coluna=0;coluna<3;coluna++){
    transposta[linha][coluna] = matrizA[coluna][linha];
  }
}

alert('Matriz A');
//observando linha a linha
for(var linha=0;linha<3;linha++){
    alert(matrizA[linha])
}

alert();

alert('Matriz B');
//observando linha a linha
for(var linha=0;linha<3;linha++){
    alert(matrizB[linha])
}

alert();

alert('A transposta');
//observando linha a transposta
for(var linha=0;linha<3;linha++){
    alert(transposta[linha])
}
