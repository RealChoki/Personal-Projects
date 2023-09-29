// tracks if the buttons should be disbaled or not
let gameState = {
  disableGame: false,
};

export function getDisableGame() {
  return gameState.disableGame;
}

export function toggleDisableGame() {
  gameState.disableGame = !gameState.disableGame;
}
