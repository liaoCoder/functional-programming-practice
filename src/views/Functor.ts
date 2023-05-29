export class Container<T> {
  private _value: T;
  constructor(value: T) {
    this._value = value;
  }
  map(fn: Function) {
    return Container.of(fn(this._value));
  }
  static of<T>(value: T) {
    return new Container(value);
  }
}

export class Maybe<T> {
  private _value: T;
  constructor(value: T) {
    this._value = value;
  }
  map<U>(fn: (value: T) => U): Maybe<U | null | undefined> {
    if (Maybe.valid(this._value)) {
      return Maybe.of(null);
    } else {
      return Maybe.of(fn(this._value));
    }
  }
  static of<T>(value: T): Maybe<T> {
    return new Maybe(value);
  }
  static valid(value: unknown) {
    return value === null || value === undefined;
  }
}
