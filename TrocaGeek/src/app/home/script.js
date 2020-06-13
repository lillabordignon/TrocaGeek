function acontece(alunos,min) {
  var quantidade = 0;
  for (var i=0; i < alunos.length; i++) {
      if(alunos[i] <= 0){
    quantidade++;
  }
}
if (quantidade >= min) {
  return true
}
return false
}


function aberturas(alunosDaSegunda,alunosDaTersa,alunosDaQuarta,min) {
  var diasAulas = [];
    diasAulas.push( acontece (alunosDaSegunda,min));
    diasAulas.push( acontece (alunosDaTersa,min));
    diasAulas.push( acontece (alunosDaQuarta,min));
  
  return diasAulas;
}
let dia1 = [10,0,10];
let dia2 = [10,0,10];
let dia3 = [10,0,10];


console.log(aberturas(dia1,dia2,dia3,2));