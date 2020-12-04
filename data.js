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

window.filter = {
  filterSort: (data, order) => {
    if(order == '1-400') {
      const orderAZ = data.sort((a, b) =>{
        return (a.id - b.id);
      })
      return orderAZ;

    } else if(order == '400-1') {
      const orderZA = data.sort((a, b) => {
        return (b.id - a.id);
      })
    
      return orderZA;
    }
  }
}

