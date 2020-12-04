export const searchCharacter = (data, name) => {
  return data.filter(results => results.name.includes(name));
}

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

export const filterSort = (data, order) => {
  if(order == "a-z"){
    return data.sort(function(a, b){
      if(a.name >= b.name){
        return -1;
        
      } else {
        return 1;
      }
    });
    
  } else {
    return data.sort(function(a, b){
      if(a.name <= b.name){
        return 1;

      } else{
        return -1;
      }
    });  
  }
}

