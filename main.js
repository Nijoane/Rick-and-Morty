import { filterSort } from './data.js';
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
      status: output.status,
      species: output.species,
      origin: output.origin.name,
      location: output.location.name,

    }));
    createCard(character);
  });
};

const cardElement = document.getElementById("container-card")
const createCard = (character) => {
  const createCharacterCard = character.map((characters) => `
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
  )
  .join('')
  cardElement.innerHTML = createCharacterCard;
};

fetchCharacter();

const btnBusca = document.getElementById("buscar");
function validar (event,){
  event.preventDefault();
  const texto = document.getElementById("txtBusca").value;
  // eslint-disable-next-line no-console
  console.log(texto);
}
btnBusca.addEventListener('keyup', validar);

