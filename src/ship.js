class Ship {
  constructor(length, index, numHits = 0, orientation = 'h') {
    this.setLength(length);
    this.numHits = numHits;
    // Index represents which consecutive ship I am
    // on the board. E.g. 3rd boat placed -> index = 2
    // This is done to provide distinction from other boats
    this.index = index;
    this.orientation = orientation;
  }

  setLength(newLength) {
    if (newLength > 0 && newLength < 6) {
      this.length = newLength;
    } else
      throw new Error('Ship length must be greater than 0 and at most 5 units');
  }

  toggleOrientation() {
    if (this.orientation === 'h') this.orientation = 'v';
    else this.orientation = 'h';
  }

  hit() {
    this.numHits += 1;
  }

  isSunk() {
    if (this.numHits === this.length) return true;
    else return false;
  }
}

module.exports = Ship;
