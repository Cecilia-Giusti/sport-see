/**Constructor Pattern - Activities
 * @constructor
 * @param {object} data - A session
 */
export class Activities {
  constructor(data) {
    this._day = data.day;
    this._kilogram = data.kilogram;
    this._calories = data.calories;
  }

  get day() {
    const newDate = new Date(this._day);
    return newDate.getDate();
  }

  get kilogram() {
    return this._kilogram;
  }

  get calories() {
    return this._calories;
  }
}
