let offset = 0;
let limit = 5;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
  .then((response) => {
    return response;
  })
  .then((jsonBody) => {
    return jsonBody.json();
  })
  .then((jsonBody) => {
    return jsonBody.results;
  })
  .then((pokemonList) => {
    for (let i = 0; i < pokemonList.length; i++) {
      let pokemon = pokemonList[i];
      let pokedexId = document.getElementById("pokedex");
      
      pokedexId.innerHTML += convertpokemonListToHTML(pokemon);
    }
  })
  .catch(function (error) {
    console.log(`Erro na requisição: ${error}`);
  });

function convertpokemonListToHTML(pokemon) {
  return `
      <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Pokemon"
          />
        </div>
      </li>
    `;
}
