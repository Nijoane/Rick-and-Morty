import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


function validar (evento) {
  const texto = document.getElementById("txtBusca").value;

  console.log(texto)
}

const btnBusca = document.getElementById("buscar");
btnBusca.addEventListener('click',validar)


console.log(example, data);