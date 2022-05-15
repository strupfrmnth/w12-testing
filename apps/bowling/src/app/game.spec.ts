import { Book } from './game';

describe('Book', () => {
  test('gutter game', () => {
    const book = new Book();
    for (let i = 0; i < 20; i++) {
      book.buy(0);
    }
    expect(book.price).toBe(0);
  });
});