// lav globale variabler her som du kan genbruge.

const listContainer = document.getElementById("list-container");
fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((response) => response.json())
  .then((data) => console.log(data));
// nu kan jeg se alle 151 pokémons i konsol.
/* Skriv (.results[0]) for at se første pokémon */
