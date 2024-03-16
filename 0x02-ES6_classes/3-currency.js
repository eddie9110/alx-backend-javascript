export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

}
