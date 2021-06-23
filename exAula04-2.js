
        /* Elabore um programa que baseados em respostas de sim ou não avalia se as caracteristicas fornecidas é de um réptil */
  
    var q1 = prompt('Bota ovos? ')   
    if (q1 == 'sim'){
        var q2 = prompt('Tem penas? ')
        if (q2 == 'nao'){
            var q3 = prompt('Respira na água?')
            if (q3 == 'nao'){
                alert ('É um réptil!')
            } 
            else { 
                alert('não é um réptil') 
            }
        }
        else { 
            alert('não é um réptil')
        }
    }
    else { 
        alert('não é um réptil')
    }
    

    //else if (q2 == 'sim'){
      //  var q3 = prompt('Respira na água?')
    //}
    //else if (q3 == 'nao'){
      //  alert ('É um réptil!')
                     //}
    //else {
     //   alert ('Não é um` réptil')
    //}        
        

    alert ('Fim')
