import { useCallback, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import './SearchArea.css';
import Pagination from "./Pagination";
import BookDetail from "../BookDetail";

// searchbar에서 검색하면 searcharea에 책 목록이 나옴
// 비동기 searcharea
export default function SearchArea() {
    // 변화하는 값을 받기 때문에 usestate(hook) 사용
    // 초기값은 공백으로 설정
    const [query, setQuery] = useState('라이카');
    // page도 검색 결과의 양에 따라 나뉘기 때문에 변화하는 값이므로 usestate 사용
    const [page, setPage] = useState(1);
    // 검색 결과인 documents를 시멘틱하게 books로 치환해서 변경값 저장
    const [books, setBooks] = useState([]);
    // 검색 결과의 정보 중 마지막 페이지를 의미하는 Isend도 결과의 수량과 페이지에 따라 변경되므로 변경값 저장
    const [isEnd, setIsEnd] = useState(false);

    // findBooks만 async 사용
    // const findBooks = async () => {
    const findBooks = useCallback(async () => {
        // 비동기는 try catch로 에러 처리
        try {
            // 한국어 같은 문자는 아스키코드에 없으므로 엔코딩으로 변환 작업
            const encodedQuery = encodeURIComponent(query);

            // fetch 부분만 await로 사용하기 위해 fidBooks만 async 설정
            // fetch는 url이 들어올 string과 결과값이 들어올 객체로 매개변수 설정
            // ? : 엔드포인트와 파라미터를 구분하는 기호 > get 방식
            // 두번째 param 부터는 &로 구분
            // query는 api에서 지정된 단어
            const response = await fetch(
                `https://dapi.kakao.com/v3/search/book?query=${encodedQuery}&page=${page}`, 
                {   // 여러 개가 올 수 있는 것들은 객체로 입력
                    headers: {
                        // kakao에서 지정한 api인지 확인 후 발급받은 키가 맞는지 인증
                        // 키와 kakaoak 사이는 공백 한 자리로 구분
                        Authorization: 'KakaoAK 2e167e85cbc39554ee1a47a9ff4e83c0'
                    },
                    method: 'GET',
                });
            

            // 서버와 연결이 잘 되었는지 확인
            // res.ok : 200번대로 정상 작동
            if(!response.ok) {
                throw new Error(`HTTP error! status : ${response.status}`)
            }

            // data는 안에 documents와 meta를 가지고 있는 객체
            // setquery는 비동기 통신이기 때문에 await로 받는 data의 정보를 출력해야 query가 밀리지 않음
            const data = await response.json();
            setBooks(data.documents);
            console.log(data.documents);
            setIsEnd(data.meta.is_end);
            console.log(data.meta.is_end);
        } catch(err) {
            console.log('책 검색 중 오류 발생: ', err)
        }
    }, [query, page]);

    // 쿼리와 페이지가 바뀔때마다 실행
    useEffect(() => {
        findBooks();
    }, [findBooks]);

    // searchBooks는 넘겨줄 객체에 검색 결과와 page를 함께 넘겨줘야 하기 때문에 함수로 생성
    const searchBooks = () => {
        // page의 초기값을 항상 1로 설정
        setPage(1);
        // useEffect를 사용해 페이지가 바뀔때마다 findBooks를 호출하도록 했으므로 필요 없다
        // findBooks();
    }

    return (
        <div className="search-area">
            {/* 바뀔때마다 호출되므로 searchbooks 필요 없음 searchBooks={searchBooks} */}
            {/* useRef를 사용하는 버전에서는 쿼리를 넣지 않음 query={query} */}
            <SearchBar setQuery={setQuery} setPage={setPage}/>
            <BookList books={books} />
            <Pagination page={page} setPage={setPage} isEnd={isEnd} />
                {/* searchBooks는 setPage(1)이기 때문에 findBooks 지정 */}
        </div>
    )
}