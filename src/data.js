export const searchCharacter = (data, name) => {
  return data.filter(results => results.name.includes(name));
}

export const filterSort = (data, order) => {
  if(order == "a-z"){
    return data.sort(function(a, b){
      if(a.name >= b.name){
        return -1;

      }else {
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
