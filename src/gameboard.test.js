const Gameboard = require('./gameboard');
const Ship = require('./ship');

xdescribe('Gameboard creation', () => {
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

xdescribe('Gameboard.placeShip()', () => {
  test('places a ship given ship object', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    const xCoordinate = 2;
    const yCoordinate = 4;
    gameboard.placeShip(xCoordinate, yCoordinate, ship);
    expect(gameboard.evaluateCoordinate(xCoordinate, yCoordinate)).toBe(true);
  });
  test('places a ship given ship length', () => {
    const gameboard = new Gameboard();
    const length = 2;
    const xCoordinate = 2;
    const yCoordinate = 4;
    gameboard.placeShip(xCoordinate, yCoordinate, length);
    expect(gameboard.evaluateCoordinate(xCoordinate, yCoordinate)).toBe(true);
  });
  test('place ship horizontally', () => {});
  xtest('place ship vertically', () => {});
  xtest('reject ship placed out-of-bounds', () => {});
  xtest('reject ship placed on top of other ship', () => {});
  xtest('reject ship placed within a tile of another ship', () => {});
});

describe('FUTURE // Transpose ship', () => {
  test('transpose', () => {});
});
