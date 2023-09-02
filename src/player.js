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

  availableAttacks = new Set();

  generateAvailableAttacks() {
    const rows = this.opponent.gameboard.rows;
    const cols = this.opponent.gameboard.cols;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        this.availableAttacks.add([x, y]);
      }
    }
  }

  generateAttack() {
    //return this.attack(xCoordinate, yCoordinate);
  }
}

module.exports = { Player: Player, AI: AI };
