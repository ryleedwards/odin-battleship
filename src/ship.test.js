const Ship = require('./ship');

describe('Ship instantiation', () => {
  test('Ship created using only length', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.numHits).toBe(0);
    expect(ship.orientation).toBe('h');
  });

  test('Ship created with full params given', () => {
    const ship = new Ship(3, 3, 'v', 0);
    expect(ship.length).toBe(3);
    expect(ship.numHits).toBe(3);
    expect(ship.orientation).toBe('v');
    expect(ship.index).toBe(0);
  });

  test('Ship too large', () => {
    expect(() => {
      const ship = new Ship(6);
    }).toThrow();
  });

  test('Ship too small', () => {
    expect(() => {
      const ship = new Ship(0);
    }).toThrow();
  });
});

describe('Ship methods', () => {
  describe('Ship.hit()', () => {
    test('Increments numHits by 1', () => {
      const ship = new Ship(4);
      const startHits = ship.numHits;
      ship.hit();
      expect(ship.numHits - startHits).toBe(1);
    });
  });

  describe('Ship.isSunk()', () => {
    test('Returns true when numHits === length', () => {
      const ship = new Ship(3);
      while (ship.numHits < ship.length) ship.hit();
      expect(ship.isSunk()).toBe(true);
    });
    test('Returns false when numHits !== length', () => {
      const ship = new Ship(3);
      ship.hit();
      expect(ship.isSunk()).toBe(false);
    });
  });

  describe('Ship.toggleOrientation()', () => {
    test('toggle orientation successfully', () => {
      const ship = new Ship(3);
      if (ship.orientation === 'h') {
        ship.toggleOrientation();
        expect(ship.orientation === 'v');
      }
      if (ship.orientation === 'v') {
        ship.toggleOrientation();
        expect(ship.orientation === 'h');
      }
    });
  });
});
