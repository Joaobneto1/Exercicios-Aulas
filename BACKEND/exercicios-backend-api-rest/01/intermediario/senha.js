const verificarSenha = (req, res, next) => {
    const { senha } = req.query
    const senhaCorreta = 'cubos123'

    if (!senha || senha !== senhaCorreta) {
        res.status(401).send('Senha incorreta');
        next();
    }
    next();
}

module.exports = { verificarSenha }