function convertpokemonListToHTML(pokemon) {
  return `
      <li class="pokemon">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div>
          <img
            src="${pokemon.photo}" alt="Pokemon"
          />
        </div>
      </li>
    `;
}

pokeAPI.getPokemons().then((pokemonList) => {
  for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];
    let pokedexId = document.getElementById("pokedex");

    pokedexId.innerHTML += convertpokemonListToHTML(pokemon);
  }
});
