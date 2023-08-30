const Ship = require('./ship');
const tempShip = new Ship(3);

class Gameboard {
  constructor(rows = 10, cols = 10, maxShips = 5, ships = []) {
    this.rows = rows;
    this.cols = cols;
    this.board = this._generateBoard(this.rows, this.cols);
    this.maxShips = maxShips;
    this.ships = ships;
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

  placeShip(xCoordinate, yCoordinate, ship, direction) {
    // if passed length instead of ship object, it can be assumed
    // to be a desired length instead

    // perform check on ship arg and if it is not a ship obj, create one
    if (!(ship instanceof Ship)) {
      ship = new Ship(ship);
    }

    // determine horizontal or vertical

    // do desired coordinates overlap with other boats?

    // do desired coordinates spill over available board space?

    // has maxShips allowed been exceeded?
    if (this.ships.length < this.maxShips) {
      // >>NO
      ship.index = this.ships.length;
      this.ships.push(ship);
    }
    // >>YES
    else throw new Error('Exceeded max number of ships');

    // All checks pass, proceed with placement
    for (let i = 0; i < ship.length; i++) {
      this.board[yCoordinate][xCoordinate + i] = 'S';
    }
  }

  _transpose(xCoordinate, yCoordinate, shipLength) {}

  _checkNeighbor(xCoordinate, yCoordinate) {}
}

module.exports = Gameboard;
