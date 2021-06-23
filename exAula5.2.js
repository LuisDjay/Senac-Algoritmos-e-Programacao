/* Monte um programa que calcule o IMC de uma pessoa. Deve ser fornecido como entrada o peso em kg, e a altura em metros. Como saida, deve ser exibido o IMC e mostrar em qual faixa de risco a pessoa se encontra */
        var peso = parseFloat(prompt('Peso: '))
        var altura = parseFloat(prompt('Altura: '))

        var imc = peso/(altura*altura)

        alert('IMC: ' + imc)

         if(imc <=18.5){
            alert('Abaixo do peso')
         }
else if(imc <=24.9){
    alert('Peso ideal')
}
else if(imc <=29.9){
    alert('Sobrepeso')
}
else if(imc <=34.9){
    alert('Obesidade Grau I')
}
else if(imc <=39.9){
    alert('Obesidade Grau II')
}
else{
    alert('Obesidade Grau III')
}