const Player = require('./player.js').Player;
const AI = require('./player.js').AI;
const Gameboard = require('./gameboard.js');
const Ship = require('./ship.js');

test('player gameboard assignment', () => {
  const player1 = new Player();
  const gameboard1 = new Gameboard();
  player1.gameboard = gameboard1;
  expect(player1.gameboard).toBe(gameboard1);
});

test('Player attack & misses', () => {
  const player1 = new Player();
  const player2 = new Player();

  player1.assignOpponent(player2);
  player2.assignOpponent(player1);

  expect(player1.attack(5, 5)).toBe(false);
});

test('Player attacks and hits', () => {
  const player1 = new Player();
  const player2 = new Player();

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
    const ai = new AI();
    ai.assignOpponent(player);
    expect(ai.opponent).toBe(player);
  });

  test('Generate available attacks', () => {
    const player = new Player();
    const ai = new AI();
    ai.assignOpponent(player);
    ai.generateAvailableAttacks();
    expect(
      ai.availableAttacks.length ===
        ai.opponent.gameboard.rows * ai.opponent.gameboard.cols
    );
  });

  describe('Attacks', () => {
    test('Generates attack >> miss', () => {
      const player = new Player();
      const ai = new AI();
      player.assignOpponent(ai);
      ai.assignOpponent(player);
      ai.generateAvailableAttacks();

      expect(typeof ai.generateAttack().result).toBe('boolean');
      expect(player.gameboard.misses.size > 0).toBe(true);
    });

    test('Generates attack >> hit', () => {
      const player = new Player();
      const ai = new AI();
      player.assignOpponent(ai);
      ai.assignOpponent(player);
      ai.generateAvailableAttacks();

      player.gameboard.placeShip(3, 3, 5);

      // brute force max # of attacks on opp board
      //   to force a successful hit
      const totalTiles =
        ai.opponent.gameboard.rows * ai.opponent.gameboard.cols;
      let successfulHit = false;
      for (let i = 0; i < totalTiles; i++) {
        const attackResultObj = ai.generateAttack();
        const attackX = attackResultObj.x;
        const attackY = attackResultObj.y;
        successfulHit = attackResultObj.result;
        if (successfulHit === true) {
          expect(attackX >= 0 && attackX < ai.opponent.gameboard.cols).toBe(
            true
          );
          expect(attackY >= 0 && attackY < ai.opponent.gameboard.rows).toBe(
            true
          );
          return;
        }
      }
      expect(successfulHit).toBe(true);
    });
  });
});
