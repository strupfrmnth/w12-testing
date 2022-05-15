export class Book {
  private buys: number[] = [];
  private currbuy = 0;

  buy(nums: number) {
    this.buys[this.currbuy++] = nums;
  }

  get price() {
    let price = 0;
    let diffbooknums = 0;
    for(let i = 0; i < this.currbuy; i++) {
      if(this.buys[i] > 0) diffbooknums++;
      price += this.buys[i] * 100;
    }
    if(diffbooknums == 2) price *= 0.95;
    return price;
  }
}