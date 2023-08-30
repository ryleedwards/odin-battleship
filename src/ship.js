class Ship {
  constructor(length, numHits = 0, sunk = false) {
    this.length = length;
    this.numHits = numHits;
    this.sunk = sunk;
  }
}

module.exports = Ship;
