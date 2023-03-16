// lav globale variabler her som du kan genbruge.

const listContainer = document.getElementById("list-container");
fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          listContainer.innerHTML += `
            <li>
            <a href="detail.html?name=${data.name}" class="list-item">
            <img src="${data.sprites.front_default}" alt="${data.name}">
            ${data.name}
            </a>
            </li>
            `;
        });
    });
  });
