// lav detajle side med hver pokemon
// array af pokemons
const pokemonArray = [
  {
    id: 1,
    name: "bulbasaur",
    types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
    height: 7,
    weight: 69,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
  },
  {
    id: 2,
    name: "ivysaur",
    types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
    height: 10,
    weight: 130,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
  },
  {
    id: 3,
    name: "venusaur",
    types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
    height: 20,
    weight: 1000,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
  },
  {
    id: 4,
    name: "charmander",
    types: [{ type: { name: "fire" } }],
    height: 6,
    weight: 85,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
  },
  {
    id: 5,
    name: "charmeleon",
    types: [{ type: { name: "fire" } }],
    height: 11,
    weight: 190,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    },
  },
  {
    id: 6,
    name: "charizard",
    types: [{ type: { name: "fire" } }, { type: { name: "flying" } }],
    height: 17,
    weight: 905,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
  },
  {
    id: 7,
    name: "squirtle",
    types: [{ type: { name: "water" } }],
    height: 5,
    weight: 90,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
  },
  {
    id: 8,
    name: "wartortle",
    types: [{ type: { name: "water" } }],
    height: 10,
    weight: 225,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    },
  },
  {
    id: 9,
    name: "blastoise",
    types: [{ type: { name: "water" } }],
    height: 16,
    weight: 855,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    },
  },
];

// Gør dynamisk herunder:

const params = new URLSearchParams(window.location.search);
const pokemon = params.get("name");

const pokemonContainer = document.getElementById("pokemon-container");

pokemonArray.forEach((pokemon) => {
  pokemonContainer.innerHTML += `
    <div class="pokemon-card">
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <h2>${pokemon.name}</h2>
      <ul>
        <li>ID: ${pokemon.id}</li>
        <li>Types: ${pokemon.types.map((type) => type.type.name)}</li>
        <li>Height: ${pokemon.height}</li>
        <li>Weight: ${pokemon.weight}</li>
      </ul>
    </div>
  `;
});
