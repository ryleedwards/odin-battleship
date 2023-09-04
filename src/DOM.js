const dom = (() => {
  const playerBoardDiv = document.querySelector('.board.player');
  const aiBoardDiv = document.querySelector('.board.ai');

  const renderGameBoard = (gbDiv, gb) => {
    gb.board.forEach((tile) => {});
  };

  const init = (player, ai) => {
    renderGameBoard(playerBoardDiv, player);
    renderGameBoard(aiBoardDiv, ai);
  };
  return { init };
})();

module.exports = dom;
