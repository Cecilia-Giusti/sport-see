/**Constructor Pattern - Score
 * @constructor
 * @param {object} data - A score
 */
export class Score {
  constructor(data) {
    this._score = data;
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
