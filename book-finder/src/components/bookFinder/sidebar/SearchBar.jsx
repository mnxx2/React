import { useRef } from 'react';
import './SearchBar.css';

// 책 검색하는 입력창 컴포넌트
// 검색어와 검색 결과가 바뀌므로 query, setQuery, searchBooks가 필요
export default function SearchBar({query, setQuery, searchBooks, setPage}) {
    // setquery가 비동기 통신이기 때문에 값이 변하기 전에는 이전의 값이 들어감 > 밀림
    const handleChange = (e) => setQuery(e.target.value);
    // query가 바뀌면 setQuery가 바뀌고 useCallback이 실행되고 findbooks가 바뀌면 useEffect가 실행되므로 필요 없다
    // 바뀔때마다 변화하는게 아니라 버튼을 활용하고 싶다면 useRef 사용
    const inputElement = useRef(null);
    // useRef 사용하려면 다시 handlesubmit 사용
    const handleSubmit = (e) => {
        // submit은 페이지를 리로드하기 때문에 해당 작업 방지
        e.preventDefault();
        // setquery를 자동으로 바뀌게 하지 않고 inputelement의 값에 접근하여 전달
        setQuery(inputElement.current.value);
        setPage(1);
    }
    console.log(query);
    
    return(
        // 쿼리와 페이지가 바뀔때마다 자동으로 호출하므로 handlesubmit 필요 없음 onSubmit={handleSubmit}
        // useref를 사용할 때는 다시 onsubmit으로 handlesubmit을 전달
        <form className="search-bar" onSubmit={handleSubmit}>
            {/* value={query}로 무조건 세팅되도록 설정되어 있으므로 지우면 input에 입력 가능 */}
            <input type="text" placeholder='검색어를 입력하시오'
                ref={inputElement}/>
            <button type="submit">검색</button>
        </form>
    )
}