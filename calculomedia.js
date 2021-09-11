//objetivo da atividade: descobrir a média dos alunos e saber se foram aprovados ou reprovados;
//média de até duas casas decimais;

let nota1 = 7;
let nota2 = 5;
let nota3 = 8;


let calculo = (nota1 + nota2 + nota3) / 3;

function medianotas(nota1,nota2,nota3){

console.log('Sua média foi: ' + calculo.toFixed(2));

if(calculo >= 6){

    console.log('Aluno(a) APROVADO(A) - Parabéns!');

}

else {(calculo < 6)

    console.log('ATENÇÃO - Aluno(a) REPROVADO(A)');

}
return calculo
}


medianotas(nota1,nota2,nota3);
