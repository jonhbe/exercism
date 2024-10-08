export class Robot {
  private _name: string;
  static usedNames = new Set();
  constructor() {
    this._name = this.createName();
  }

  private createName() {
    let possibleName = '';
    do {
      possibleName = `${this.calculateLetters()}${this.calculateNumbers()}`
    } while (Robot.usedNames.has(possibleName))
    Robot.usedNames.add(possibleName)
    return possibleName;
  }

  private randomNumber(min = 0, max = 100) {
    return min + (Math.floor(Math.random() * (max - min + 1)))
  }

  private calculateLetters() {
    const ASCII_A = 65;
    const ASCII_Z = 90;
    return String.fromCharCode(this.randomNumber(ASCII_A,ASCII_Z),this.randomNumber(ASCII_A,ASCII_Z))
  }

  private calculateNumbers() {
    return this.randomNumber(0,999)
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.createName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }
}


