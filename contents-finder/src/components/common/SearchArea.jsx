import { useState, useCallback, useEffect } from 'react';
import SearchBar from './SearchBar';
import BookList from '../bookFinder/BookList';
import Pagination from './Pagination';
import './SearchArea.css';
import BlogList from '../blogFinder/BlogList';

// book과 blog 모두 사용하기 위해 props는 type으로 설정
export default function SearchArea({type}) {
  const [query, setQuery] = useState('한강');
  const [page, setPage] = useState(1);
  // 범용으로 사용하기 위해 변수명 변경
  const [documents, setDocuments] = useState([]);
  const [isEnd, setIsEnd] = useState(false);

  const findDocuments = useCallback(async () => {
    // 블로그인지 북인지 알 수 없기 때문에 빈 배열로 초기화
    setDocuments([]);
    try {
      const encodedQuery = encodeURIComponent(query);
      const endPoint = 
        type === 'book' 
                  ? `https://dapi.kakao.com/v3/search/book?query=${encodedQuery}&page=${page}`
                  : `https://dapi.kakao.com/v2/search/blog?query=${encodedQuery}&page=${page}`;

      const response = await fetch(
        // 구조가 같기 때문에 endpoint를 바꿔주면 범용(블로그, 책)으로 사용 가능
        endPoint,
        {
          headers: {
            Authorization: 'KakaoAK 49cb61b1c39806d43ee2df81aa819e78',
          },
          method: 'GET',
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status : ${response.status}`);
      }

      const data = await response.json();
      setDocuments(data.documents);
      console.log(data.documents);
      setIsEnd(data.meta.is_end);
      console.log(data.meta.is_end);
    } catch (err) {
      console.log('책 검색 중 오류 발생:', err);
    }
    // endPoint 사용으로 주소가 바뀌면 다시 렌더링할 수 있도록 type도 함께 넣어준다
  }, [type, query, page]);

  useEffect(() => {
    findDocuments();
  }, [findDocuments]);

  return (
    <div className="search-area">
      <SearchBar setQuery={setQuery} setPage={setPage}></SearchBar>
      {/* type이 book일때 booklist, blog일때 bloglist 출력 */}
      {
        type === 'book' ? <BookList books={documents}></BookList> : <BlogList blogs={documents}/>
      }
      
      <Pagination page={page} setPage={setPage} isEnd={isEnd}></Pagination>
    </div>
  );
}
