const Ship = require('./ship');
const tempShip = new Ship(3);

class Gameboard {
  constructor(rows = 10, cols = 10) {
    this.rows = rows;
    this.cols = cols;
    this.board = this._generateBoard(this.rows, this.cols);
  }

  _generateBoard() {
    const rowArr = [];
    for (let i = 0; i < this.rows; i++) {
      const colArr = [];
      for (let j = 0; j < this.cols; j++) {
        colArr.push('W');
      }
      rowArr.push(colArr);
    }
    return rowArr;
  }

  evaluateCoordinate(xCoordinate, yCoordinate) {
    if (this.board[yCoordinate][xCoordinate] === 'S') return true;
    else return false;
  }

  placeShip(xCoordinate, yCoordinate, ship) {
    // if passed length instead of ship object, it can be assumed
    // to be a desired length instead

    // perform check on ship arg and if it is not a ship obj, create one
    if (!(ship instanceof Ship)) {
      ship = new Ship(ship);
    }

    for (let i = 0; i < ship.length; i++) {
      //prevent placement of boat on top of another boat

      this.board[yCoordinate][xCoordinate + i] = 'S';
    }

    //TODO - Horizontal vs. Vertical placement
  }

  _transpose(xCoordinate, yCoordinate) {}

  _checkNeighbor(xCoordinate, yCoordinate) {}
}

module.exports = Gameboard;
