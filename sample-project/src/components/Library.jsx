// Book을 여러개 모아놓은 라이브러리 생성
// Book을 사용하므로 Book import
import React from "react"
import Book from "./Book"

export default function Library({books}) {
    return(
        <>
        {/* 아래의 코드들은 전부 자바스크립트 표현식이므로 중괄호 블록 사용 */}
        {/* map()함수로 books 배열의 요소들을 하나씩 꺼내 book으로 매개변수 지정,
            이 데이터를 Book 태그에 사용 -> 제목과 저자가 하나씩 넘어감 */}
            {books.map((book, index) => (
                
                <React.Fragment key={index}>
                    <Book book={book}/>
                </React.Fragment>
            ))}
        </> 
    ) 
}