// try {
//     console.log(nome)
// } catch (error) {
//     return res.status(500).json('erro interno')
//     console.log(error.stack)
// }

try {
    console.log('olá')

    // throw 'Lancei um erro'
    throw new Error('Lancei um erro')

    console.log('olá depois do throw')
} catch (error) {
    console.log(error)
}