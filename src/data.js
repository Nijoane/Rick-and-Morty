export const searchCharacter = (data, name) => {
  return data.filter(results => results.name.includes(name));
}

export const orderAZ =(data) => data.sort((a, b) => (a.name < b.name) ? - 1 : 1);

export const orderZA =(data) => data.sort((a, b) => (a.name > b.name) ? - 1 : 1);

function percentStatus(status, resultFilter) {
  const perc = (resultFilter.length *100)/status.length;
  return Math.round(perc);
}

function getSpecies(getPersonagens, species) {
  let resultSpecies = getPersonagens.filter(el => el.species.includes(species));
  return resultSpecies;
};

function percentSpecies(species, resultSpecies) {
  let percent = (resultSpecies.length *100)/species.length;
  return Math.round(percent);
}