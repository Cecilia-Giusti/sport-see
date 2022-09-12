export class DataTransformPerformance {
  constructor(data, kind) {
    this._data = data.data;
    this._kind = kind;
  }

  get subject() {
    let newKind = this._kind.this._data.kind;

    return newKind;
  }

  get value() {
    return this._data.value;
  }
}
