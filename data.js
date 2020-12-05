/* eslint-disable no-console */
export const searchCharacter = (data, name) => {
  return data.filter(results => results.name.toUpperCase().includes(name.toUpperCase()));
}

export const orderAZ = (data) => data.sort((a, b) => (a.name < b.name) ? - 1 : 1);

export const orderZA = (data) => data.sort((a, b) => (a.name > b.name) ? - 1 : 1);

export const getSpecies = (data, species) => {
  return data.filter(results => results.species.includes(species));
}

export const getStatus = (data, status) => {
  console.log(status)
  return data.filter(results => results.status.includes(status));
}