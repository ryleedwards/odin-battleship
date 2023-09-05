const Gameboard = require('./gameboard');

class Player {
  constructor(gameboard = new Gameboard()) {
    this.gameboard = gameboard;
  }

  opponent = this.assignOpponent();
  assignOpponent(opponent) {
    this.opponent = opponent;
  }

  attack(xCoordinate, yCoordinate) {
    if (this.opponent.gameboard.receiveAttack(xCoordinate, yCoordinate)) {
      // HANDLE HIT
      return true;
    } else {
      // HANDLE MISS
      return false;
    }
  }
}

class AI extends Player {
  constructor() {
    super();
  }

  availableAttacks = [];

  generateAvailableAttacks() {
    const rows = this.opponent.gameboard.rows;
    const cols = this.opponent.gameboard.cols;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        this.availableAttacks.push(`${x},${y}`);
      }
    }
  }

  generateAttack() {
    // pick random [x,y] from availableAttacks
    const targetCoordinatesIndex = Math.floor(
      Math.random() * this.availableAttacks.length
    );
    const targetCoordinates = this.availableAttacks[targetCoordinatesIndex];
    this.availableAttacks.splice(targetCoordinatesIndex, 1);
    const x = targetCoordinates.slice(0, 1);
    const y = targetCoordinates.slice(2);

    const result = this.attack(x, y);

    return { result: result, x: x, y: y };
  }
}

module.exports = { Player: Player, AI: AI };
