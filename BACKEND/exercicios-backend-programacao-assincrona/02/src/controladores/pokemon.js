const { listarPokemons, detalharPokemon } = require('utils-playground');

const exibirPokemons = async (req, res) => {

    const pokemons = await listarPokemons();

    return res.status(200).json(pokemons.results)
};

const exibirPokemonPorId = async (req, res) => {
    const { id } = req.params;

    const pokemon = await detalharPokemon(Number(id));

    const pokemonResumido = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species
    };

    return res.status(200).json(pokemonResumido);

};



const exibirPokemonPorNome = async (req, res) => {

    const { nome } = req.params;

    const pokemon = await detalharPokemon(nome);

    const pokemonResumido = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species
    };

    return res.status(200).json(pokemonResumido);

};

module.exports = {
    exibirPokemons,
    exibirPokemonPorId,
    exibirPokemonPorNome
}