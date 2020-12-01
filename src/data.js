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
