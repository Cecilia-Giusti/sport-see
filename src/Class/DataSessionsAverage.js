export class DataSessionsAverage {
  constructor(data) {
    this._day = data.day;
    this._sessionLenght = data.sessionLength;
  }

  get day() {
    const days = ["L", "M", "M", "J", "V", "S", "D"];

    let newDate = days[this._day - 1];
    return newDate;
  }

  get sessionLenght() {
    return this._sessionLenght;
  }
}
