function agregarElemento(){
  const input = document.getElementById("input").value;
  const lista = document.getElementById("lista");

  const elementoLista = document.createElement('li')
  elementoLista.textContent = input;
  lista.appendChild(elementoLista);
 
  
  const button = document.createElement('button')
  button.textContent = 'delete'
  elementoLista.appendChild(button);


  button.onclick = function(){
    lista.removeChild(elementoLista);
  }

}