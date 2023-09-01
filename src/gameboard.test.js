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

describe('Coordinate evaluation', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3, 0, 'h');
  gameboard.placeShip(4, 5, ship);

  test('Eval ship', () => {
    expect(gameboard.evaluateCoordinate(6, 5)).toBe(true);
  });

  test('Eval water', () => {
    expect(gameboard.evaluateCoordinate(1, 1)).toBe(false);
  });

  test('Eval out-of-bounds', () => {
    expect(
      gameboard.evaluateCoordinate(gameboard.rows + 5, gameboard.cols + 5)
    ).toBe(false);
  });

  test('getShipCoordinates', () => {
    const ship2 = new Ship(2);
    gameboard.placeShip(7, 7, ship2);
    const ship2Coordinates = gameboard.getShipCoordinates(ship2);
    const [x0, y0] = ship2Coordinates[0];
    const [x1, y1] = ship2Coordinates[1];
    expect(x0).toBe(7);
    expect(y0).toBe(7);
    expect(x1).toBe(8);
    expect(y1).toBe(7);
  });
});

describe('placeShip()', () => {
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

describe('receiveAttack()', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(4, 0, 'h');
  gameboard.placeShip(5, 4, ship);
  test('Ship attacked', () => {
    expect(gameboard.receiveAttack(5, 4)).toBe(true);
    expect(ship.numHits).toBe(1);
    const hitsSetIterator = gameboard.hits.values();
    expect(hitsSetIterator.next().value.toString()).toBe('5,4');
  });
  test('Attack misses', () => {
    // correctly returns false
    expect(gameboard.receiveAttack(8, 9)).toBe(false);
    // correctly stores missed coordinate
    const setIterator = gameboard.misses.values();
    let [missX, missY] = setIterator.next().value;

    expect(missX).toBe(8);
    expect(missY).toBe(9);
  });
});

describe('checkAllSunk()', () => {
  test('all sunk using direct .hit() calls', () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(2);
    gameboard.placeShip(3, 3, ship1);
    expect(gameboard.checkAllSunk()).toBe(false);
    for (let i = 0; i < ship1.length; i++) {
      ship1.hit();
    }
    expect(ship1.isSunk()).toBe(true);
    const ship2 = new Ship(3);
    gameboard.placeShip(5, 5, ship2);
    expect(gameboard.checkAllSunk()).toBe(false);
    for (let i = 0; i < ship2.length; i++) {
      ship2.hit();
    }
    expect(ship2.isSunk()).toBe(true);
    expect(gameboard.checkAllSunk()).toBe(true);
  });

  test('all sunk using .receiveAttack() calls', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    gameboard.placeShip(2, 2, ship);
    expect(gameboard.receiveAttack(2, 2)).toBe(true);
    expect(gameboard.receiveAttack(3, 2)).toBe(true);
    expect(gameboard.checkAllSunk()).toBe(true);
  });
});
