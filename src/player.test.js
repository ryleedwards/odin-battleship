const Player = require('./player.js').Player;
const AI = require('./player.js').AI;
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

  player1.assignOpponent(player2);
  player2.assignOpponent(player1);

  expect(player1.attack(5, 5)).toBe(false);
});

test('Player attacks and hits', () => {
  const player1 = new Player();
  player1.assignGameboard(new Gameboard());
  const player2 = new Player();
  player2.assignGameboard(new Gameboard());

  player1.assignOpponent(player2);
  player2.assignOpponent(player1);

  player2.gameboard.placeShip(5, 5, new Ship(3));

  expect(player1.attack(5, 5)).toBe(true);
});

describe('AI Behavior', () => {
  test('Instantiate AI', () => {
    const ai = new AI();
    expect(ai instanceof AI).toBe(true);
    expect(Object.getPrototypeOf(ai) instanceof Player).toBe(true);
  });

  test('Assign opponent', () => {
    const player = new Player();
    const ai = new AI(player);
    expect(ai.opponent).toBe(player);
  });
  describe('Attacks', () => {
    test('Generates attack >> miss', () => {
      const player = new Player();
      player.assignGameboard(new Gameboard());
      const ai = new AI(player);
      ai.assignGameboard(new Gameboard());

      expect(typeof ai.generateAttack()).toBe('boolean');
      expect(player.gameboard.misses.size > 0).toBe(true);
    });

    test('Generates attack >> hit', () => {
      const player = new Player();
      player.assignGameboard(new Gameboard());
      const ai = new AI(player);
      ai.assignGameboard(new Gameboard());

      player.gameboard.placeShip(3, 3, 5);

      const totalTiles =
        ai.opponent.gameboard.rows * ai.opponent.gameboard.cols;
      let successfulHit = false;
      for (let i = 0; i < totalTiles; i++) {
        successfulHit = ai.generateAttack();
        if (successfulHit === true) {
          console.log(`Successful AI hit after ${i} attempts`);
          return;
        }
      }
      expect(successfulHit).toBe(true);
    });
  });
});
