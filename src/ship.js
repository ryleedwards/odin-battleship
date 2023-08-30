class Ship {
  constructor(length, numHits = 0) {
    this.setLength(length);
    this.numHits = numHits;
  }

  setLength(newLength) {
    if (newLength > 0 && newLength < 6) {
      this.length = newLength;
    } else
      throw new Error('Ship length must be greater than 0 and at most 5 units');
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
