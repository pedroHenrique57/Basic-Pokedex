let pokeAPI = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.front_default;

  return pokemon;
}

pokeAPI.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};

pokeAPI.getPokemons = (offset = 0, limit = 50) => {
  const url = `https://pokeapi.co/api/v2/pokemon-form?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => {
      return response;
    })
    .then((jsonBody) => {
      return jsonBody.json();
    })
    .then((jsonBody) => {
      return jsonBody.results;
    })
    .then((pokemons) => {
      return pokemons.map(pokeAPI.getPokemonDetail);
    })
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch(function (error) {
      console.error(`Erro na requisição: ${error}`);
    });
};
