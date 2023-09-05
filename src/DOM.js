const dom = (() => {
  const playerBoardDiv = document.querySelector('.board.player');
  const aiBoardDiv = document.querySelector('.board.ai');

  const addCellHTMLAttributes = (
    cellDiv,
    gb,
    xCoordinate,
    yCoordinate,
    isOpponent
  ) => {
    // globals - same regardless of cell condition
    cellDiv.classList.add('cell');
    // data for row/col || x/y reference
    cellDiv.dataset.row = yCoordinate;
    cellDiv.dataset.col = xCoordinate;
    if (isOpponent) cellDiv.dataset.player = 'false';
    else cellDiv.dataset.player = 'true';

    // opponent square - obfuscate with '.hidden'
    if (isOpponent) {
      cellDiv.classList.add('hidden');
      return;
    }
    // if not opponent's, check if its a boat
    if (gb.evaluateCoordinate(xCoordinate, yCoordinate)) {
      cellDiv.classList.add('boat');
      cellDiv.dataset.shipIndex = gb.board[yCoordinate][xCoordinate];
      return;
    }
    // if not a boat, must be water
    cellDiv.classList.add('water');
  };

  const renderGameboard = (gbDiv, gb, isOpponent) => {
    for (let r = 0; r < gb.rows; r++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      for (let c = 0; c < gb.cols; c++) {
        const cellDiv = document.createElement('div');
        cellDiv.dataset.row = r;
        cellDiv.dataset.col = c;
        addCellHTMLAttributes(cellDiv, gb, c, r, isOpponent);
        rowDiv.appendChild(cellDiv);
      }
      gbDiv.appendChild(rowDiv);
    }
  };

  const init = (player, ai) => {
    renderGameboard(playerBoardDiv, player.gameboard, false);
    renderGameboard(aiBoardDiv, ai.gameboard, true);
  };
  return { init };
})();

module.exports = dom;

// STASHED CODE:
// For use in searching cells:
//    .cell[data-row="0"][data-col="5"][data-player=true]
