
function percentStatus(status, resultFilter) {
  const perc = (resultFilter.length *100)/status.length;
  return Math.round(perc);
}

export function getSpecies(getPersonagens, species) {
  let resultSpecies = getPersonagens.filter(el => el.species.includes(species));
  return resultSpecies;
};

function percentSpecies(species, resultSpecies) {
  let percent = (resultSpecies.length *100)/species.length;
  return Math.round(percent);
}