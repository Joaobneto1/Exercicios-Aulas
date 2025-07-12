const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

let frutaMinuscula = frutas.map(elemnt => elemnt.toLocaleLowerCase())
let frutaMaiusculaIndice = frutaMinuscula.map((element, index) => index + ' - ' + element.charAt(0).toUpperCase() + element.slice(1))

console.log(frutaMaiusculaIndice)