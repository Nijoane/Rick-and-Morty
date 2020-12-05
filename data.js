/* eslint-disable no-console */
export const searchCharacter = (data, name) => {
  return data.filter(results => results.name.includes(name));
}

export const orderAZ =(data) => data.sort((a, b) => (a.name < b.name) ? - 1 : 1);

export const orderZA =(data) => data.sort((a, b) => (a.name > b.name) ? - 1 : 1);

export const getSpecies = (data, specie) => {
  return data.filter(results=> results.species.includes(specie));

}

export const getStatus = (data, status) => {
  console.log(data)
  return data.filter(results => results.status.includes(status));
}