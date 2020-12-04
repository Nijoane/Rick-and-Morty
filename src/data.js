export const searchCharacter = (data, name) => {
  return data.filter(results => results.name.includes(name));
}

export const orderAZ =(data) => data.sort((a, b) => (a.name < b.name) ? - 1 : 1);

export const orderZA =(data) => data.sort((a, b) => (a.name > b.name) ? - 1 : 1);


