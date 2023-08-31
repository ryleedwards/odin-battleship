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
  test('placing boat on top of another throws error', () => {
    const board = new Gameboard();
    board.placeShip(2, 3, 4);
    expect(() => {
      board.placeShip(4, 3, 2);
    }).toThrow();
  });
  test('place ship horizontally', () => {
    const board = new Gameboard();
    const hShip = new Ship(3, 0, 'h');
    board.placeShip(3, 4, hShip);
    for (let i = 0; i < hShip.length; i++) {
      expect(board.evaluateCoordinate(3 + i, 4)).toBe(true);
    }
  });
  test('place ship vertically', () => {
    const board = new Gameboard();
    const vShip = new Ship(3, 0, 'v');
    board.placeShip(3, 4, vShip);
    for (let i = 0; i < vShip.length; i++) {
      expect(board.evaluateCoordinate(3, 4 + i)).toBe(true);
    }
  });
  test('reject ship placed out-of-bounds (x-axis)', () => {
    const gameboard = new Gameboard();
    expect(() => {
      gameboard.placeShip(8, 2, 4);
    }).toThrow();
  });
  test('reject ship placed out-of-bounds (y-axis)', () => {
    const gameboard = new Gameboard();
    expect(() => {
      gameboard.placeShip(2, 11, 4);
    }).toThrow();
  });
});

xdescribe('FUTURE // Transpose ship', () => {
  test('transpose', () => {});
});

xdescribe('Ship tracking and indexing', () => {});
