const Gameboard = require('./gameboard');
const Ship = require('./ship');

describe('Gameboard creation', () => {
  const defaultGameboard = new Gameboard();
  const customGameboard = new Gameboard(8, 9);

  test('gameboard holds correct # of rows', () => {
    expect(defaultGameboard.board.length).toBe(defaultGameboard.rows);
    expect(customGameboard.board.length).toBe(customGameboard.rows);
  });

  test('every gb row holds correct # of cols', () => {
    defaultGameboard.board.forEach((row) => {
      expect(row.length).toBe(defaultGameboard.cols);
    });
    customGameboard.board.forEach((row) => {
      expect(row.length).toBe(customGameboard.cols);
    });
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
