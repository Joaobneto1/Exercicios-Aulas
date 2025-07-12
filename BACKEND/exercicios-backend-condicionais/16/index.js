//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 12;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

if (idadeDoAluno >= 18) {
    console.log("Pode realizar a matricula");
} else if (idadeDoAluno < 18 && possuiResponsavel == true) {
    console.log("Esta com responsavel entao podera realizar a matricula");
} else {
    console.log("Não é possível fazer a rematrícula");
}