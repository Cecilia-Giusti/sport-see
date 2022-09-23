/**Constructor Pattern - Performance
 * @constructor
 * @param {object} element - A performance
 */
export class Performance {
  constructor(element) {
    this._value = element.value;
    this._number = element.kind;
  }

  get subject() {
    const kind = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];
    let newKind = kind[this._number - 1];

    return newKind;
  }

  get value() {
    return this._value;
  }
}
