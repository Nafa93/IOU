export class Expense {

  private _name : String;
  
  get name() : String {
      return this._name;
  }

  set name(name : String) {
      this._name = name;
  }
  
  private _value;

  get value() : String {
    return this._name;
  }
  
  constructor(name : String, value : Number) {
    this._name = name;
    this._value = value;
  }
}