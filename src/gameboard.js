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

  _buildDesiredCoordinates(ship, startX, startY, isTranspose) {
    const desiredCoords = [];
    if (isTranspose) {
      //TODO
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (ship.orientation === 'h') {
          // horizontal
          desiredCoords.push([startX + i, startY]);
        } else if (ship.orientation === 'v') {
          // vertical
          desiredCoords.push([startX, startY + i]);
        }
      }
    }
    return desiredCoords;
  }

  _doesPlacementOverlap(desiredCoords) {
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
  }

  _isPlacementInbounds(desiredCoords) {
    desiredCoords.forEach((desiredPair) => {
      let [xDesired, yDesired] = desiredPair;
      if (xDesired > this.cols)
        throw new Error(
          `Desired coordinates are out of bounds: ${desiredPair} :: ${xDesired} exceeds ${this.cols}`
        );
      if (yDesired > this.rows)
        throw new Error(
          `Desired coordinates are out of bounds: ${desiredPair} :: ${yDesired} exceeds ${this.rows}`
        );
    });
  }

  _isMaxShipsExceeded() {
    if (this.ships.length >= this.maxShips) {
      throw new Error('Exceeded max number of ships');
    }
  }

  evaluateCoordinate(xCoordinate, yCoordinate) {
    if (
      xCoordinate < this.rows &&
      yCoordinate < this.cols &&
      this.board[yCoordinate][xCoordinate] !== 'W'
    )
      return true;
    else return false;
  }

  getShipCoordinates(ship) {
    const shipCoordinates = [];
    for (let i = 0; i < this.occupied.length; i++) {
      let [x, y] = this.occupied[i];
      if (parseInt(this.board[y][x]) === parseInt(ship.index)) {
        shipCoordinates.push(this.occupied[i]);
      }
    }
    return shipCoordinates;
  }

  placeShip(xCoordinate, yCoordinate, ship) {
    // if passed length instead of ship object, it can be assumed
    // to be a desired length instead

    // perform check on ship arg and if it is not a ship obj, create one
    if (!(ship instanceof Ship)) {
      ship = new Ship(ship, this.ships.length);
    }

    // assign index if ship has not already been assigned an index
    if (ship.index === undefined);
    {
      ship.index = this.ships.length;
    }

    // what are boat's desired placement coords (ALL SQUARES)
    const desiredCoords = this._buildDesiredCoordinates(
      ship,
      xCoordinate,
      yCoordinate,
      false // MODIFY FOR TRANSPOSE
    );

    // do desired coordinates overlap with other boats?
    this._doesPlacementOverlap(desiredCoords);

    // do desired coordinates spill over available board space?
    this._isPlacementInbounds(desiredCoords);

    // has maxShips allowed been exceeded?
    this._isMaxShipsExceeded();

    // All checks pass, proceed with placement

    // horizontal placement
    if (ship.orientation === 'h') {
      for (let i = 0; i < ship.length; i++) {
        this.board[yCoordinate][xCoordinate + i] = ship.index;
        this.occupied.push([xCoordinate + i, yCoordinate]);
      }
    }

    // vertical placement
    if (ship.orientation === 'v') {
      for (let i = 0; i < ship.length; i++) {
        this.board[yCoordinate + i][xCoordinate] = ship.index;
        this.occupied.push([xCoordinate, yCoordinate + i]);
      }
    }

    // has ship already been placed? (i.e. it is in this.ships[])
    if (!this.ships.includes(ship));
    {
      ship.index = this.ships.length;
      this.ships.push(ship);
    }
  }
}

module.exports = Gameboard;
