export class DataTransformActivities {
  constructor(data) {
    this._data = data;
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
