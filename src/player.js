class Player {
  constructor() {}

  gameboard = this.assignGameboard();
  opponent = this.assignOpponent();

  assignGameboard(gameboard) {
    this.gameboard = gameboard;
  }

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
  constructor(opponent) {
    super();
    this.assignOpponent(opponent);
  }

  generateAttack() {
    const randomX = Math.floor(Math.random() * this.opponent.gameboard.cols);
    const randomY = Math.floor(Math.random() * this.opponent.gameboard.rows);

    return this.attack(this.opponent, randomX, randomY);
  }
}

module.exports = { Player: Player, AI: AI };
