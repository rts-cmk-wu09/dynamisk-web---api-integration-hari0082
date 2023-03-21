// lav detajle side med hver pokemon

// array af pokemons
import axios from "./node_modules/axios/dist/esm/axios.js";

// Gør dynamisk herunder:

const params = new URLSearchParams(window.location.search);
const pokemon = params.get("name");

const pokemonContainer = document.getElementById("pokemon-container");

axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
  pokemonContainer.innerHTML += `
    <div class="pokemon-card">
      <img src="${response.data.sprites.front_default}" alt="${pokemon.name}">
      <h2>${response.data.name}</h2>
      <ul>
        <li>ID: ${response.data.id}</li>
        <li>Types: ${response.data.types.map((type) => type.type.name)}</li>
        <li>Height: ${response.data.height}</li>
        <li>Weight: ${response.data.weight}</li>
      </ul>
    </div>
  `;
});
