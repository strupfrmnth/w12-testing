export class Book {
  private buys: number[] = [];
  private currbuy = 0;

  buy(nums: number) {
    this.buys[this.currbuy++] = nums;
  }

  get price() {
    let diffprice = 0;
    let sameprice = 0;
    let diffbooknums = 0;
    let samebooknums = 0;
    let onlyonetypebokknums = 0;
    for(let i = 0; i < this.currbuy; i++) {
      if(this.buys[i] > 0) {
        diffbooknums++;
        if(diffbooknums == 1) onlyonetypebokknums = this.buys[i];
        samebooknums += this.buys[i]-1;
        sameprice += samebooknums * 100;
      }
    }
    if(diffbooknums == 1) {
      return onlyonetypebokknums * 100;
    }
    if(diffbooknums == 2) {
      diffprice = diffbooknums * 100 * 0.95;
    }
    if(diffbooknums == 3) {
      diffprice = diffbooknums * 100 * 0.90;
    }
    return sameprice + diffprice;
  }
}