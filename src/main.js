/* eslint-disable no-console */
import { searchCharacter,  orderAZ, orderZA, getSpecies, getStatus }  from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const cardElement = document.getElementById("container-card");
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

const btnSpecie = document.getElementById("buscar");
const inputSpecie = document.getElementById("txtBusca");

btnSpecie.addEventListener('click', () => {
  const characterSpecie = inputSpecie.value;
  const results = getSpecies(data.results, characterSpecie);
  createCard(results);
})
  
const btnStatus = document.getElementById("buscar");
const inputStatus = document.getElementById("txtBusca");

btnStatus.addEventListener('click', () => {
  const characterStatus = inputStatus.value;
  const results = getStatus(data.results, characterStatus);
  console.log(results)
  createCard(results);
  
})

const btnName = document.getElementById("buscar");
const inputName = document.getElementById("txtBusca");

btnName.addEventListener('click', () => {
  const characterName = inputName.value;
  const results = searchCharacter(data.results, characterName);
  
  createCard(results);
  
});

function orderA(e){
  e.preventDefault()
  const filterOrderAZ = orderAZ(data.results);

  createCard(filterOrderAZ);
}
document.getElementById("btnOrderAZ").addEventListener("click", orderA);

function orderZ(e) {
  e.preventDefault()
  const filterOrderZA= orderZA(data.results);  createCard(filterOrderZA);
}
document.getElementById("btnOrderZA").addEventListener("click", orderZ);