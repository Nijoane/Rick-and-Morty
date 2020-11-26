import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


function validar (evento) {
  const texto = document.getElementById("txtBusca").value;

  console.log(texto)
}

const btnBusca = document.getElementById("buscar");
btnBusca.addEventListener('click',validar)


console.log(example, data);

const statusMenu = document.getElementById("filtro-status");
const speciesMenu = document.getElementById("filtro-species");


reload.addEventListener("click", refreshPage);

statusMenu.addEventListener("change", () => {
  const retorno = window.data.getStatus(getCharacters, statusMenu.value);
  show(retorno);
  calc.innerHTML= percentStatus(getCharacters, retorno) + "%";
});