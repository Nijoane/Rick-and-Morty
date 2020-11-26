function getEstatus(getPersonagens, estatus) {
  let resultFilter = getPersonagens.filter (el => el.estatus.includes(estatus));
  return resultFilter;

/* eslint-disable no-console */
export const exemple = () => {

};

function percentEstatus(estatus, resultFilter) {
  const perc = (resultFilter.length *100)/estatus.length;
  return Math.round(perc);
}

function getSpecies(getPersonagens, especies) {
  let resultSpecies = getPersonagens.filter(el => el.especies.includes(Species));
  return resultEspecies;
};

function percentEspecies(especies, resultSpecies) {
  let percent = (resultEspecies.length *100)/especies.length;
  return Math.round(percent);
}