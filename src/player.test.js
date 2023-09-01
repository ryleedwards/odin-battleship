const Player = require('./player.js');
const Gameboard = require('./gameboard.js');
const Ship = require('./ship.js');

test('player gameboard assignment', () => {
  const player1 = new Player();
  const gameboard1 = new Gameboard();
  player1.assignGameboard(gameboard1);
  expect(player1.gameboard).toBe(gameboard1);
});

test('Player attack & misses', () => {
  const player1 = new Player();
  player1.assignGameboard(new Gameboard());
  const player2 = new Player();
  player2.assignGameboard(new Gameboard());

  expect(player1.attack(player2.gameboard, 5, 5)).toBe(false);
});

test('Player attacks and hits', () => {
  const player1 = new Player();
  player1.assignGameboard(new Gameboard());
  const player2 = new Player();
  player2.assignGameboard(new Gameboard());
  player2.gameboard.placeShip(5, 5, new Ship(3));

  expect(player1.attack(player2.gameboard, 5, 5)).toBe(true);
});
