import React from "react";

// books 중에서 가격이 25000 이하인 책만 추출하는 함수
export default function ForFilter({src}) {
    // 조건 설정 후 결과가 True인 결과만 LowPrice에 저장
    // 숫자 단위로 콤마(,)는 사용하지 못하지만 언더바(_)는 사용 가능
    const lowPrice = src.filter(book => book.price < 25_000);
    // 호스트 정보는 태그 안에 보여주지 않고 숨겨두어야 함
    const endPoint = "https://wikibook.co.kr/images/cover/s/";

    return (
        <dl>
            {/* 조건에 맞춰 추출한 lowPrice 배열의 아이템을 하나씩 형태를 변경하여 값 출력 */}
            {lowPrice.map(book => (
                <React.Fragment key={book.isbn}>
                    <dt>
                        <a href={`${endPoint}${book.isbn}.jpg`}>
                            {book.title}({book.price}원)
                        </a>
                    </dt>
                    <dd>{book.summary}</dd>
                </React.Fragment>
            ))}
        </dl>
    )
}