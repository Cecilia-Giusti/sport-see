/**Constructor Pattern - Average session
 * @constructor
 * @param {object} data - A average session with a day
 */
export class SessionsAverage {
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
