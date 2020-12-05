/* eslint-disable no-console */
import { searchCharacter,  orderAZ, orderZA, getSpecies, getStatus}  from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const cardElement = document.getElementById("container-card");
const inputSearch = document.getElementById("txtBusca");
const btnSearch = document.getElementById("buscar");

const createCard = (data) => {
  const createCharacterCard = data.map((results) => {
    return `
      <li id="create-card">
        <div class="info-card">
          <span class="character-name" id="name">${results.name}</span>
          <img 
            class="character-image"
            src="${results.image}" 
            alt="character-image"
          >
        </div>
        <aside class="card-modal">
          <span class="span-modal">Status: ${results.status}</span>
          <span class="span-modal">Specie: ${results.species}</span>
          <span class="span-modal">Origin: ${results.origin.name}</span>
          <span class="span-modal">Location: ${results.location.name}</span>
        </aside>
      </li>
    `
  })
  .join('')
  cardElement.innerHTML = createCharacterCard;
};

createCard(data.results)

btnSearch.addEventListener('click', () => {
  const characterSpecies = inputSearch.value;
  const filterSpecies = (getSpecies(data.results, characterSpecies));

   createCard(filterSpecies);
});

btnSearch.addEventListener('click', () => {
  const characterStatus = inputSearch.value;
  const filterStatus = (getStatus(data.results, characterStatus));

   createCard(filterStatus);
});

btnSearch.addEventListener('click', () => {
  const characterName = inputSearch.value;
  const filterName = (searchCharacter(data.results, characterName));

  createCard(filterName);
});

function orderA(e){
  e.preventDefault();
  const filterOrderAZ = orderAZ(data.results);

  createCard(filterOrderAZ);
}
document.getElementById("btnOrderAZ").addEventListener("click", orderA);

function orderZ(e) {
  e.preventDefault();
  const filterOrderZA= orderZA(data.results);

  createCard(filterOrderZA);
}
document.getElementById("btnOrderZA").addEventListener("click", orderZ);

