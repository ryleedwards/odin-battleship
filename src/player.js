class Player {
  constructor(isAI) {
    this.isAI = isAI;
  }

  gameboard = this.assignGameboard();

  assignGameboard(gameboard) {
    this.gameboard = gameboard;
  }
}

module.exports = Player;
