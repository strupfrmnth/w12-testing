import { Book } from './game';

describe('Book', () => {
  test('buy zero book', () => {
    const book = new Book();
    for (let i = 0; i < 20; i++) {
      book.buy(0);
    }
    expect(book.price).toBe(0);
  });
  test('buy one book', () => {
    const book = new Book();
    for (let i = 0; i < 20; i++) {
      book.buy(1);
    }
    expect(book.price).toBe(100);
  });
});