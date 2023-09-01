const Player = require('./player.js');
const Gameboard = require('./gameboard.js');

test('player gameboard assignment', () => {
  const player1 = new Player();
  const gameboard1 = new Gameboard();
  player1.assignGameboard(gameboard1);
  expect(player1.gameboard).toBe(gameboard1);
});
