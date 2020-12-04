/* eslint-disable no-console */
import { filterSort, searchCharacter } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


const fetchCharacter = () => {
  const characterId = 400;
  const promise = [];

  for(let id = 1; id <= characterId; id++){
    const  baseUrl = `https://rickandmortyapi.com/api/character/${id}`;

    promise.push(fetch(baseUrl).then((response) => response.json()));
  }   
  // eslint-disable-next-line no-undef
  Promise.all(promise).then((resolve) => {
    const character = resolve.map((output) => ({
      id: output.id,
      name: output.name,
      image: output.image,
      status: output.status,
      species: output.species,
      origin: output.origin.name,
      location: output.location.name,
    }));
  
    createCard(character);
  });
};
fetchCharacter();

const cardElement = document.getElementById("container-card")
const createCard = (character) => {
  const createCharacterCard = character.map((characters) => {
    return `
      <li id="create-card">
        <div class="info-card">
          <span class="character-name" id="name">${characters.name}</span>
          <img 
            class="character-image"
            src="${characters.image}" 
            alt="character-image"
          >
        </div>
        <aside class="card-modal">
          <span class="span-modal">Status: ${characters.status}</span>
          <span class="span-modal">Specie: ${characters.species}</span>
          <span class="span-modal">Origin: ${characters.origin}</span>
          <span class="span-modal">Location: ${characters.location}</span>
        </aside>
      </li>
    `
  })
  .join('')
  cardElement.innerHTML = createCharacterCard;
};

document.getElementById("filters").addEventListener("change", () => {
  const listSort = document.getElementById("filters").value;
  const filterOrder = (filterSort(data.results, listSort));

  createCard(filterOrder);
});


const btnBusca = document.getElementById("buscar");
const txtSearch = document.getElementById("txtBusca")
btnBusca.addEventListener('click', () => {
  const characterName = txtSearch.value;
  const results = searchCharacter(data.results, characterName);
  
  createCard(results);
});
