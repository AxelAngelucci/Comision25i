const OPTIONS = ['PIEDRA', 'PAPEL', 'TIJERA'];
let player = null;
let bot = null;

function setRandomOptionToBot() {
  bot = Math.round(Math.random()*2);
}

function showMenu() {
  return `
  Ingresa una opción
  0 - PIEDRA
  1 - PAPEL
  2 - TIJERA
  5 - SALIR
  `
}

function getOptionPlayer() {
  player = parseInt(prompt(showMenu()));
  if (isNaN(player) || !(player >= 0 && player <= 2) ) return 'Opcion incorrecta';
  return player;
}

function evalWinner(player, bot) {
  if ((player === 0 && bot === 2) || (player === 1 && bot === 0) || (player === 2 && bot === 1)) {
    Swal.fire({
      title: 'GANASTE !!',
      text: `${OPTIONS[player]} gana a ${OPTIONS[bot]}`,
      icon: 'success',
    });
  }
  else if (player === bot) {
    Swal.fire({
      title: 'EMPATE',
      text: `${OPTIONS[player]} empata con ${OPTIONS[bot]}`,
      icon: 'info',
    });
  }
  else {
    Swal.fire({
      title: 'PERDISTE',
      text: `${OPTIONS[player]} gana ${OPTIONS[bot]} `,
      icon: 'error',
    });
  }
  
}

function playGame() {
  setRandomOptionToBot();
  const playerOption = getOptionPlayer();
  evalWinner(playerOption, bot);
}

playGame();

/**
 * Este programa contiene 2 bugs encontrados
 * 
 * Uno visual y el otro funcional
 * 
 * Encontrar ambos bugs y fixearlos
 */
