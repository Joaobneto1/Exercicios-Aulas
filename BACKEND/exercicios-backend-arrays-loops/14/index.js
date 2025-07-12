const arrayA = [5, 32, 3, 44, 1, 7, 8];
const arrayB = [57, 4, 21, 2, 13, 9, 6];

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        console.log(arrayA[i]);
    } else if (arrayB[i] < arrayA[i]) {
        console.log(arrayB[i]);
    }
}