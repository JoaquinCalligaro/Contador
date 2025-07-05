const contador = document.getElementById('contador');

function sumar() {
  let valor = parseInt(contador.textContent);
  valor++;
  contador.textContent = valor;
}

function restar() {
  let valor = parseInt(contador.textContent);
  valor--;
  contador.textContent = valor;
}

function reiniciar() {
  contador.textContent = 0;
}
