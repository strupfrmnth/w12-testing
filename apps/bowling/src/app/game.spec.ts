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
  test('buy two different books', () => {
    book.buy(1);
    book.buy(1);
    expect(book.price).toBe(190);
  });
  test('buy one book and another type of two books', () => {
    book.buy(1);
    book.buy(2);
    expect(book.price).toBe(290);
  });
  test('buy 3 books with 3 types', () => {
    book.buy(1);
    book.buy(1);
    book.buy(1);
    expect(book.price).toBe(270);
  });
  test('buy 4 books with 3 types', () => {
    book.buy(1);
    book.buy(1);
    book.buy(2);
    expect(book.price).toBe(370);
  });
  test('buy 5 books with 3 types', () => {
    book.buy(1);
    book.buy(2);
    book.buy(2);
    expect(book.price).toBe(470);
  });
});