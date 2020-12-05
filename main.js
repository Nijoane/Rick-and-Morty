/* eslint-disable no-undef */
import {getSpecies} from './data.js';
import data from './data/rickandmorty/rickandmorty.js'

const fetchCharacter = () => {
  const characterId = 400;
  const promise = [];

  for(let id = 1; id <= characterId; id++){
    const  baseUrl = `https://rickandmortyapi.com/api/character/${id}`;

    promise.push(fetch(baseUrl).then((response) => response.json()));
  }   
  
  Promise.all(promise).then((resolve) => {
    const character = resolve.map((output) => ({
      id: output.id,
      name: output.name,
      image: output.image,
      species: output.species,
      status: output.status,
      origin: output.origin.name,
      location: output.location.name
    }));
    createCard(character);
  });
};

const cardElement = document.getElementById("container-card")

const createCard = (character) => {
  ;

  const createCharacterCard = character.map((characters) => `
    <li id="create-card">
      <span class="character-name" id="name">${characters.name}</span>
      <img 
        class="character-image"
        src="${characters.image}" 
        alt="character-image"
      >
      <button class="button-card" id="button-card">
        <span class="material-icons">add</span>
      </button> 
    </li>
  ` 
  )
  .join('')
  cardElement.innerHTML = createCharacterCard;
};

function validar (event) {
  event.preventDefault();
  const texto = document.getElementById("txtBusca").value;
  
  const resultados = getSpecies(data.results, texto);
  createCard(resultados);
    
  }

const btnBusca = document.getElementById("buscar");
btnBusca.addEventListener('click',validar)

fetchCharacter();
