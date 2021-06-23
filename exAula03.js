
        /* Transformando Pseudocódigo em linguagem de programação */
        /* var 
            idade: inteiro
           Inicio
            Escreva: 'Informe sua idade'  
           Leia: Idade
           Se a idade for maior ou igual a 16 entao:  
            Escreva: 'Essa pessoa pode votar'
           Senão
            Escreva: 'Essa pessoa nao pode votar' 
           Fim
         */  
           
    var idade = parseInt(prompt('Informe a sua idade: '))
    if (idade >= 16){
            alert('Você pode votar ')
    }
    else{
        alert('Essa pessoa não pode votar')
        }
    alert ('Fim')
