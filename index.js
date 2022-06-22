//Arreglo
let cliente = [];
//Function del boton agregar
let select = document.querySelector('#tipo');
document.querySelector('#btn_cotizador').addEventListener('click', (e) => {
  e.preventDefault();
  //Tomo todo los input text
  let nombre = document.querySelector('#cliente').value;
  let dominio = document.querySelector('#dominio').value;
  let valor = document.querySelector('#valor').value;

  let asegurado = {
    nombre: nombre,
    dominio: dominio,
    valor: valor,
    tipo: select.value,
  };
  cliente.push(asegurado);
  mostrar();
});

function mostrar() {
  let lista = document.querySelector('.contenedor_cotizacion');
  lista.innerHTML = '';

  //Recorrer con for
  for (const i of cliente) {
    if (select.value == 'todo-riesgo') {
      lista.innerHTML += ` <ul>
      <li>Nombre : ${i.nombre}</li>
      <li>Dominio : ${i.dominio}</li>
      <li> Valor : ${i.valor}</li>
      <li> Tipo : ${select.value}</li>
      </ul>
      <h2> Su cotizacion es ${0.005 * i.valor} </h2>
      `;
      console.log('entre');
    } else if (select.value == 'todo') {
      lista.innerHTML += ` <ul>
      <li>Nombre : ${i.nombre}</li>
      <li>Dominio : ${i.dominio}</li>
      <li> Valor : ${i.valor}</li>
      <li> Tipo : ${select.value}</li>
      </ul>
      <h2> Su cotizacion es ${0.01 * i.valor} </h2>
      `;
    }
  }
}
