const nota = 2;

if (nota >= 9 && nota <= 10) {
    console.log(`O estudante tirou ${nota}, entao obteve Conceito A`);
} else if (nota >= 8 && nota <= 8.9) {
    console.log(`O estudante tirou ${nota}, entao obteve Conceito B`);
} else if(nota >= 6 && nota <= 7.9) {
    console.log(`O estudante tirou ${nota}, entao obteve Conceito C`);
} else if (nota >= 4 && nota <= 5.9) {
    console.log(`O estudante tirou ${nota}, entao obteve Conceito D`);
} else {
    console.log(`O estudante tirou ${nota}, entao obteve Conceito E`);
}