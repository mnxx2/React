import React from "react";
import BookCard from "./BookCard";
import './Library.css';

export default function Library({books}) {
    return (
        <div className="container">
            {  // map을 사용해야 하므로 자바스크립트 표현식 중괄호 사용
                books.map((book) => (
                    // Book 태그에 각 book 요소를 구분할 수 있는 isbn을 key로 부여
                    // BookCard 컴포넌트에 books 속성명으로 book 전달
                    <BookCard books={book} key={book.isbn}/>
                ))
            }
        </div>
    )
}