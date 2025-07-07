// 외부로부터 책 정보를 받아 출력
export default function ForItem({book}) {
    return (
        <>
            <dt>
                {book.title} ({book.price}원)
                <a href={`https://wikibook.co.kr/images/cover/s/${book.isbn}.jpg`}>cover</a>
            </dt>
            <dd>{book.summary}</dd>
        </>
    )
}