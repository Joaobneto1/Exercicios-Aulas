const elementoh1 = document.querySelector("h1");
console.log(elementoh1);

elementoh1.textContent += "Novo DOM!";
// elementoh1.textContent = elementoh1.textContent + "Novo DOM!";
elementoh1.style.backgroundColor = "red";
elementoh1.style.color = "#fff";

const elementoImagem = document.querySelector("img");
elementoImagem.alt = "Essa imagem é de teste";
