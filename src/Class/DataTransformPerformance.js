export class DataTransformPerformance {
  constructor(element) {
    this._data = element;
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
    return this._data.value;
  }
}
