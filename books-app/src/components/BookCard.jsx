import './BookCard.css'

// book의 정보를 포함한 book card 만드는 컴포넌트
export default function BookCard({books}){
    // 객체 분해
    const {title, isbn, price, summary, slug} = books;
    const bookImage = `https://wikibook.co.kr/images/cover/s/${isbn}.jpg`
    // 책의 정보가 담긴 웹페이지로 넘어가는 주소
    const detailURL = `https://wikibook.co.kr/${slug}`

    // 이벤트가 필요 없을 때는 () 빈 소괄호로 입력
    const handleClick = () => {
        // open : 브라우저를 열어주는 함수, _blank : 새창, _self : 현재 창
        // 지금은 _self 사용 불가, 뒤로가기를 했을 때 CSS와 충돌 발생
        window.open(detailURL, '_blank')
    }

    return (
        // 카드 자체를 클릭했을 때 이벤트가 실행되도록 카드 div에 이벤트 부여
        <div className="book-card" onClick={handleClick}>
            <h1 className="book-title">{title}</h1>
            <img src={bookImage} alt={`${title} 표지`} className="book-image" />
            <p className="book-summary">{summary}</p>
            {/* String.toLocaleString() : Locale에 따라서 숫자나 날짜의 표기법을 나눠준다 */}
            <p className="book-price">{price.toLocaleString()}원</p>
        </div>
    )
}