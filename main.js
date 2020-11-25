/* eslint-disable no-undef */
/* eslint-disable no-console */
import { } from './data.js';

const fetchCharacter = () => {
  const characterId = 400;
  const promises = [];

  for(let id = 1; id <= characterId; id++){
    const  baseUrl = `https://rickandmortyapi.com/api/character/${id}`;

    promises.push(fetch(baseUrl).then((response) => response.json()));
  }   
  
  Promise.all(promises).then((resolve) => {
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
  console.log(character);

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
fetchCharacter();

