const email = ".@";

if (email.includes("@") && email.includes(".") && !(email.charAt(0) === ".") && !(email.charAt(email.length - 1) == ".")) {
    console.log("E-mail válido");
} else {
    console.log("E-mail inválido");
}