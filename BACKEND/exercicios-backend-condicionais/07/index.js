const aposentada = true;
const portadoraDeDoenca = false;
const totalDeRendimentos = 28937; //emCentavos

if (aposentada == true && portadoraDeDoenca == true) {
    console.log("INSENTA")
} else if (aposentada == false && portadoraDeDoenca == true) {
    console.log("INSENTA");
} else if (aposentada == true && portadoraDeDoenca == false) {
    console.log("INSENTA");
} else if (aposentada == false && portadoraDeDoenca == false && totalDeRendimentos > 2855970) {
    console.log("PEGA LEAO, seus rendimentos são superiores a R$28.559,70")
} else if (aposentada == false && portadoraDeDoenca == false && totalDeRendimentos < 2855970) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE, seus rendimentos são inferiores a R$28.559,70")
}