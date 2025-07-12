const celular = 7199918888;
const celularString = celular.toString()

if (celularString.length == 10) {
    console.log(`(${celularString.slice(0, 2)}) 9 ${celularString.slice(2, 6)}-${celularString.slice(6, 10)}`);
} else {
    console.log(`9 ${celularString.slice(0, 4)}-${celularString.slice(4, 8)}`);
}