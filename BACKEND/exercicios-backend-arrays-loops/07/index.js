const nomes = ["Ana", "Joana", "Carlos", "amanda"];

var newArray = nomes.filter(function (item) {
    return item.charAt(0) == "A" || item.charAt(0) == "a";
});


console.log(newArray);