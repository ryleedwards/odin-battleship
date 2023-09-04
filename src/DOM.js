const dom = (() => {
  const playerBoardDiv = document.querySelector('.board.player');
  const aiBoardDiv = document.querySelector('.board.ai');

  const renderGameboard = (gbDiv, gb) => {
    gb.board.forEach((tile) => {});
  };

  const init = (player, ai) => {
    renderGameboard(playerBoardDiv, player.gameboard);
    renderGameboard(aiBoardDiv, ai.gameboard);
  };
  return { init };
})();

module.exports = dom;
