const Ship = require('./ship');

describe('Ship instantiation', () => {
  test('Ship created using only length', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.numHits).toBe(0);
    expect(ship.sunk).toBe(false);
  });

  test('Ship created with full params given', () => {
    const ship = new Ship(3, 3, true);
    expect(ship.length).toBe(3);
    expect(ship.numHits).toBe(3);
    expect(ship.sunk).toBe(true);
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
