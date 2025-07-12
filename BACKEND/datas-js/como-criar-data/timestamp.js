const finalCopaDoMundo = new Date(2002, 5, 30, 8);
const finalMaisUmaHora = +finalCopaDoMundo + 1000 * 60 * 60;
const maisUmaHoraDate = new Date(finalMaisUmaHora);

console.log(finalCopaDoMundo, maisUmaHoraDate);