class Ship {
  constructor(length, numHits = 0, sunk = false) {
    this.setLength(length);
    this.numHits = numHits;
    this.sunk = sunk;
  }

  setLength(newLength) {
    if (newLength > 0 && newLength < 6) {
      this.length = newLength;
    } else
      throw new Error('Ship length must be greater than 0 and at most 5 units');
  }
}

module.exports = Ship;
