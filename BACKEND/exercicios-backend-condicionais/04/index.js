const ladoA = 6;
const ladoB = 6;

if (ladoA === ladoB && ladoA === 0) {
    console.log(`Os lados sao ${ladoA} entao é uma bucha de branco`)
} else if (ladoA === ladoB && ladoA === 1) {
    console.log(`Os lados sao ${ladoA} entao é uma bucha de ás`)
} else if (ladoA === ladoB && ladoA === 2) {
    console.log(`Os lados sao ${ladoA} entao é uma bucha de duque`)
} else if (ladoA === ladoB && ladoA === 3) {
    console.log(`Os lados sao ${ladoA} entao é uma bucha de terno`)
} else if (ladoA === ladoB && ladoA === 4) {
    console.log(`Os lados sao ${ladoA} entao é uma bucha de quadra`)
} else if (ladoA === ladoB && ladoA === 5) {
    console.log(`Os lados sao ${ladoA} entao é uma bucha de quina`)
} else if (ladoA === ladoB && ladoA === 6) {
    console.log(`Os lados sao ${ladoA} entao é uma bucha de sena`)
} else {
    console.log("Não é uma bucha");
}