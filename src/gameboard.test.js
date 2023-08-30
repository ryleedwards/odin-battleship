const Gameboard = require('./gameboard');
const Ship = require('./ship');

describe('Gameboard creation', () => {
  const gameboard = new Gameboard();
  test('gameboard holds 10 rows', () => {
    expect(gameboard.board.length === 10).toBe(true);
  });
});

describe('Gameboard.placeShip()', () => {
  xtest('places a ship given coordinates', () => {
    const gameboard = new Gameboard();
    const xCoordinate = 2;
    const yCoordinate = 4;
    gameboard.placeShip(new Ship(2), xCoordinate, yCoordinate);
  });
});
