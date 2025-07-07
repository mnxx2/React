import './Pagination.css'

// 페이지를 넘기는 버튼과 기능 생성
// 페이지가 바뀌면 다시 search해서 값을 받아와야 함 > searchBooks
// 변경된 페이지값 출력 > page, setPage
// 마지막 페이지에서 버튼 비활성화 > isEnd
export default function Pagination({page, setPage, searchBooks, isEnd}) {
    // 이전 버튼 생성
    const handlePrev = () => {
        setPage(page - 1);
        // usecallback과 useEffect를 사용하므로 필요 없다
        // searchBooks();
    }

    // 다음 버튼 생성
    const handleNext = () => {
        setPage(page + 1);
        // searchBooks();
    }

    return (
        <div className="pagination">
            {/* dispabled는 Page가 1일때와 isEnd가 true일때 실행 */}
            <button onClick={handlePrev} disabled={page === 1}>이전</button>
            <span>{page}</span>
            <button onClick={handleNext} disabled={isEnd}>다음</button>
        </div>
    )
}