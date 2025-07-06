const contador = document.getElementById('contador');

const modoBlanco = document.getElementById('modoOscuro');

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

function alternarModo() {
  document.body.classList.toggle('modo-oscuro');

  if (document.body.classList.contains('modo-oscuro')) {
    modoBlanco.textContent = 'Modo Blanco';
  } else {
    modoBlanco.textContent = 'Modo Oscuro';
  }
}
