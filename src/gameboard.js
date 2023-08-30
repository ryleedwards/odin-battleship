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
        colArr.push(null);
      }
      rowArr.push(colArr);
    }
    return rowArr;
  }
}

module.exports = Gameboard;
