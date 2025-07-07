import './BookDetail.css';

// booklist에서 책을 선택하면 제목, 저자, 출판사, 출판일, isbn, 내용 등의 상세 정보를 출력
// 그 중 상세내용: 상세정보는 anchor로 설정, 책 정보 페이지로 이동
export default function BookDetail({book}) {
    // 책 정보를 받지 못했다면 안내 문구 출력
    if(!book) {
        return(
            <div className="book-detail">책을 선택하시오.</div>
        )
    }

    return (
        <div className="book-detail">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">
                <strong>저자 : </strong>
                {book.authors.join(', ')}
            </p>
            <p className="book-author">
                <strong>출판일 : </strong>
                {/* 출판일에서 년/월/일만 추출하기 위해 앞에서부터 T 문자까지 자름 */}
                {book.datetime.split('T')[0]}
            </p>
            <p className="book-author">
                <strong>ISBN : </strong>
                {book.isbn}
            </p>
            <p className="book-author">
                <strong>책 내용 : </strong>
                {book.contents}
            </p>
            <p className="book-author">
                <strong>상세내용 : </strong>
                <a href={book.url} target="_blank" rel="noopener noreferrer">상세정보</a>
            </p>
            <img src={book.thumbnail} alt={book.title} />
        </div>
    )
}