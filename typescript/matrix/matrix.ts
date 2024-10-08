export class Matrix {
  private _rows;
  constructor(matrix: string) {
    this._rows = matrix.split('\n').map(line => line.split(' ').map(s => parseInt(s)))
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    const columns: number[][] = [];
    for (let i = 0; i < this._rows.length; i++) {
      for (let j = 0; j < this._rows[i].length; j++) {
        if (columns[j] === undefined) {
          columns.push([])
        }
        columns[j].push(this._rows[i][j]);
      }
    }
    return columns
  }
}
