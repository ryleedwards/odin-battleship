const dom = (() => {
  const playerBoardDiv = document.querySelector('.board.player');
  const aiBoardDiv = document.querySelector('.board.ai');

  const renderGameboard = (gbDiv, gb, isOpponent) => {
    for (let r = 0; r < gb.rows; r++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      for (let c = 0; c < gb.cols; c++) {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        if (isOpponent) cellDiv.classList.add('opponent');
        cellDiv.dataset.row = r;
        cellDiv.dataset.col = c;
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
