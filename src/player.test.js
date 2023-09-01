const Player = require('./player.js');
const Gameboard = require('./gameboard.js');

test('player gameboard assignment', () => {
  const player1 = new Player();
  const gameboard1 = new Gameboard();
  player1.assignGameboard(gameboard1);
  expect(player1.gameboard).toBe(gameboard1);
});

test('Player attack & misses', () => {
  const player1 = new Player(false);
  player1.assignGameboard(new Gameboard());
  const player2 = new Player(false);
  player2.assignGameboard(new Gameboard());

  expect(player1.attack(player2.gameboard, 5, 5)).toBe(false);
});
