const Ship = require('./ship');
const tempShip = new Ship(3);

class Gameboard {
  constructor(rows = 10, cols = 10, maxShips = 5, ships = [], occupied = []) {
    this.rows = rows;
    this.cols = cols;
    this.board = this._generateBoard(this.rows, this.cols);
    this.maxShips = maxShips;
    this.ships = ships;
    this.occupied = occupied;
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
    if (this.board[yCoordinate][xCoordinate] !== 'W') return true;
    else return false;
  }

  placeShip(xCoordinate, yCoordinate, ship) {
    // if passed length instead of ship object, it can be assumed
    // to be a desired length instead

    // perform check on ship arg and if it is not a ship obj, create one
    if (!(ship instanceof Ship)) {
      ship = new Ship(ship, this.ships.length);
    }

    // what are boat's desired placement coords (ALL SQUARES)
    const desiredCoords = [];
    for (let i = 0; i < ship.length; i++) {
      if (ship.orientation === 'h') {
        // horizontal
        desiredCoords.push([xCoordinate, yCoordinate + i]);
      } else if (ship.orientation === 'v') {
        // vertical
        desiredCoords.push([xCoordinate + i, yCoordinate]);
      }
    }

    // do desired coordinates overlap with other boats?
    if (this.occupied.length > 0) {
      desiredCoords.forEach((desiredPair) => {
        let [xDesired, yDesired] = desiredPair;
        this.occupied.forEach((occupiedPair) => {
          let [xOccupied, yOccupied] = occupiedPair;
          if (xDesired === xOccupied && yDesired === yOccupied)
            throw new Error(`Desired coordinates at ${set} are occupied`);
        });
      });
    }

    // do desired coordinates spill over available board space?

    // has maxShips allowed been exceeded?
    if (this.ships.length >= this.maxShips) {
      throw new Error('Exceeded max number of ships');
    }

    // All checks pass, proceed with placement
    for (let i = 0; i < ship.length; i++) {
      this.board[yCoordinate][xCoordinate + i] = ship.index;
      this.occupied.push([xCoordinate + i, yCoordinate]);
    }
  }

  _transpose(xCoordinate, yCoordinate, shipLength) {}

  _checkNeighbor(xCoordinate, yCoordinate) {}
}

module.exports = Gameboard;
