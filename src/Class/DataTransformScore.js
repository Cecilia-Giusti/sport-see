export class DataTransformScore {
  constructor(data) {
    this._score = data.score;
  }

  get name() {
    return "score";
  }

  get score() {
    let score = this._score * 100;
    return score;
  }

  get fill() {
    return "#FF0000";
  }
}
