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

module.exports = Player;
