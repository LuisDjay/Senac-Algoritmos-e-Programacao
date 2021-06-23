
        /* Programa que executa as operações aritméticas entre números */
        var numa = prompt ('Digite um número: ')
        var numb = prompt ('Digite outro número: ')
        numa = parseInt(numa)
        numb = parseInt(numb)
        var resub = numa - numb 
        var remult = numa * numb 
        var rediv = numa / numb 
        var redobro = (2*(numa + numb))
        
        alert('A subtração entre '+ numa + 
        ' e '+ numb + ' é: ' + resub )
        alert('A multiplicação entre '+ numa + 
        ' e ' + numb + ' é: ' + remult )
        alert('A divisão entre '+ numa + 
        ' e '+ numb + ' é: ' + rediv )
        alert('O dobro de  '+ (numa+numb) + 
        ' é: ' + redobro )
