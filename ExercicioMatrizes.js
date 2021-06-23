
var media =[[],[],[],[],[]], situacao =[[],[],[],[],[]]
media[0][0]='MÉDIA'; 
media[1][0]='Português';
media[2][0]='Matemática';
media[3][0]='Física';
media[4][0]='Biologia';

situacao[0][0]='SITUAÇÃO'; 
situacao[0][1]='Português';
situacao[0][2]='Matemática';
situacao[0][3]='Física';
situacao[0][4]='Biologia';

for(linha=0;linha<media.length; linha++){
  for(coluna=1;coluna<3;coluna++){
    if(linha==0){
      media[linha][coluna]=prompt("Insira um nome")
      situacao[linha][coluna]=media[linha][coluna]
    }else{
      media[linha][coluna]=prompt("Insira a média de "+ media[linha][0]+" do aluno " + media[0][coluna])
        if(media[linha][coluna]<6){
          situacao[linha][coluna]="REPROVADO"
        }else{
          situacao[linha][coluna]="APROVADO"
        }
    }
  }
}
 for (linha=0;linha<situacao.length;linha++){
   for(coluna=0;coluna<3;coluna++){
     alert(situacao[linha][coluna])
   }
   alert('\n')
 }
