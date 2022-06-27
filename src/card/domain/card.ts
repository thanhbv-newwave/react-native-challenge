export interface CardInterface {
  _id: string;
  _name: string;
}

export class Card implements CardInterface {
  _id: string;
  _name: string;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}
