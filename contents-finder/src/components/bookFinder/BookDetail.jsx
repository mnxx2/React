import React from 'react';
import './BookDetail.css';

export default function BookDetail({ book }) {
  if (!book) {
    return <div className="book-detail">책을 선택하시오.</div>;
  }

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p>
        <strong>저자:</strong>
        {/* {book.authors.join(', ')} */}
      </p>
      <p>
        <strong>출판사:</strong>
        {book.publisher}
      </p>
      <p>
        <strong>출판일:</strong>
        {book.datetime.split('T')[0]}
      </p>
      <p>
        <strong>ISBN:</strong>
        {book.isbn}
      </p>
      <p>
        <strong>책 내용:</strong>
        {book.contents}
      </p>
      <p>
        <strong>상세내용:</strong>
        <a href={book.url} target="_blank" rel="noopener noreferrer">
          상세정보
        </a>
      </p>
      <img src={book.thumbnail} alt={book.title} />
    </div>
  );
}
