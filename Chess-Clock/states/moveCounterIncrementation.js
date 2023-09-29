// Declare initial variables
let firstPlayerTurn = true; // Indicates the first player's turn
let moveCounter1 = 0;       // Counter for player 1
let moveCounter2 = 0;       // Counter for player 2

// Function to increment the move counters based on the player's turn
function moveCounterIncrementation(isFirstTappingField) {
  if (!firstPlayerTurn) {
    // If it's not the first player's turn, increment the appropriate counter
    const moveCounterHTML = isFirstTappingField ? "move-counter-1" : "move-counter-2";
    const incrementedMove = isFirstTappingField ? ++moveCounter1 : ++moveCounter2
    document.getElementById(moveCounterHTML).textContent = incrementedMove;

  } else {
    // Toggle the player's turn and return 0 (no increment)
    firstPlayerTurn = !firstPlayerTurn;
  }

  let totalMoves = moveCounter1 + moveCounter2;
  return totalMoves;
}

export { moveCounterIncrementation };
