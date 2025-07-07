import { useState } from "react";
import BlogList from "./BlogList";
import BlogSearchBar from "./BlogSearchBar";
import './BlogSearchArea.css';

// blog 검색과 결과가 나오는 영역들의 상위 컴포넌트
export default function BlogSearchArea() {
    // blog 정보 관리
    const [blogs, setBlogs] = useState([]);
    // blog 검색 결과 페이지의 마지막 여부 관리
    const [isEnd, setIsEnd] = useState(false);
    // 검색어 관리
    const [query, setQuery] = useState('한강');
    // page 관리
    const [page, setPage] = useState(1);


    // 비동기로 블로그 정보 받기
    const findBlogs = async () => {
        // {auth} 형식으로 사용하면 key 인식 못함, 변수만 사용
        const auth = 'KakaoAK 2e167e85cbc39554ee1a47a9ff4e83c0';
        const encodedQuery = encodeURIComponent(query);
        try {
            // api url을 통해 블로그 정보 받기
            const response = await fetch(
                `https://dapi.kakao.com/v2/search/blog?query=${encodedQuery}}&page=${page}`,
                {
                    headers: {
                        Authorization: auth
                    },
                    method: 'GET'
                }
            );

            // 블로그 정보가 받아졌는지 확인
            if(!response.ok) {
                throw new Error(`HTTP error! status : ${response.status}`)
            }

            const bData = await response.json();
            setBlogs(bData.documents);
            console.log(bData.documents);
            setIsEnd(bData.meta.is_end);
            console.log(bData.meta.is_end);
        } catch(error) {
            console.log('블로그 검색 중 오류 발생: ', error)
        }
    }

    const searchBlogs = () => {
        setPage(1);
        findBlogs();
    } 

    return (
        <div className="search-area">
            <BlogSearchBar query={query} setQuery={setQuery} searchBlogs={searchBlogs}/>
            <BlogList blogs={blogs} />
        </div>
    )
}