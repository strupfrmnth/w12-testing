export class Book {
  private _price = 0;
  buy(nums: number) {
    this._price += nums*100;
  }

  get price() {
    return this._price;
  }
}