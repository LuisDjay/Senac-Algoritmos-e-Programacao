
        /* Faça um programa para que o aluno consiga saber se o mesmo está aprovado em uma disciplina. A nota minima é 6.0. Valores negativos devem ser considerados inválidos. */
        
    var materia = prompt('Digite a disciplina: ')
    var nota = parseFloat(prompt('Digite a sua nota:  '))
    
    
    if (nota < 0){
            alert('Dados inválidos ')
    }
    else if (nota >= 6){
        alert('Você foi aprovado em ' + materia)
        }
    else{
        alert('Você foi reprovado em ' + materia)
    }
    alert ('Fim')

/* Resolução do professor 
var nota = parseFloat(prompt('Digite a sua nota:  '))
if (nota > 0.0){
    if (nota >= 6.0){
        alert('Você foi aprovado')
        }
    else{
        alert('Você foi reprovado')
    }
}
else{
    alert ('Nota Inválida')
}
    alert ('Fim') */
