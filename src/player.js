class Player {
  constructor() {}

  gameboard = this.assignGameboard();

  assignGameboard(gameboard) {
    this.gameboard = gameboard;
  }

  attack(targetGameboard, xCoordinate, yCoordinate) {
    if (targetGameboard.receiveAttack(xCoordinate, yCoordinate)) {
      // HANDLE HIT
      return true;
    } else {
      // HANDLE MISS
      return false;
    }
  }
}

class AI extends Player {
  constructor(opponentPlayer) {
    super();
    this.opponentPlayer = opponentPlayer;
  }

  generateAttack() {
    const randomX = Math.floor(
      Math.random() * this.opponentPlayer.gameboard.cols
    );
    const randomY = Math.floor(
      Math.random() * this.opponentPlayer.gameboard.rows
    );

    return this.attack(this.opponentPlayer, randomX, randomY);
  }
}

module.exports = { Player: Player, AI: AI };
