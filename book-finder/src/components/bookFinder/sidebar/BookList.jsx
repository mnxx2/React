import Book from "./Book";
import './BookList.css';

// 생성한 Book 카드를 리스트로 여러개 생성
export default function BookList({books}) {
    return (
        <div className="book-list">
            {/* Books는 배열이므로 map을 통해 아이템을 하나씩 꺼내가며 Book 생성 */}
            {books.map((book) => {
                return (
                    // key는 유니크한 값으로 아이템 구분
                    <div key={book.isbn}>
                        <Book book={book}></Book>
                    </div>
                )
            })}
        </div>
    )
}