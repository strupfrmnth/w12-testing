import { Book } from './game';

describe('Book', () => {
  let book: Book;

  beforeEach(() => {
    book = new Book();
  });

  it('should create an instance', () => {
    expect(book).toBeTruthy();
  });

  test('buy zero book', () => {
    book.buy(0);
    expect(book.price).toBe(0);
  });
  test('buy one book', () => {
    book.buy(1);
    expect(book.price).toBe(100);
  });
});