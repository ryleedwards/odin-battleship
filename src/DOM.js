const dom = (() => {
  const playerBoardDiv = document.querySelector('.board.player');
  const aiBoardDiv = document.querySelector('.board.ai');

  const renderGameBoard = (gbDiv, gb) => {
    gb.board.forEach((tile) => {});
  };

  return { renderGameBoard };
})();

module.exports = dom;
