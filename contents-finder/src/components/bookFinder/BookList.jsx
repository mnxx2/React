import Book from './Book';
import './BookList.css';
export default function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <div key={book.isbn}>
            <Book book={book}></Book>
          </div>
        );
      })}
    </div>
  );
}
