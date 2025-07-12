const somar = (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) + Number(num2);

    res.send(resultado);
};

const subtrair = (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) + Number(num2);

    res.send(resultado);
};

const multiplicar = (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) * Number(num2);

    res.send(resultado);
};

const dividir = (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) / Number(num2);

    res.send(resultado);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}