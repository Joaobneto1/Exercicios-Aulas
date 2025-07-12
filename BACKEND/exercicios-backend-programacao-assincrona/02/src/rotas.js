const express = require('express');

const rotas = express();

const controladoresPokemons = require('./controladores/pokemon');

rotas.get('/pokemon', controladoresPokemons.exibirPokemons);
rotas.get('/pokemon/:id', controladoresPokemons.exibirPokemonPorId);
rotas.get('/pokemon/:nome', controladoresPokemons.exibirPokemonPorNome);


module.exports = rotas