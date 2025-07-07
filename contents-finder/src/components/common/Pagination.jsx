import './Pagination.css';

export default function Pagination({ page, setPage, isEnd }) {
  const handlePrev = () => {
    setPage(page - 1);
    // searchBooks();
  };
  const handleNext = () => {
    setPage(page + 1);
    // searchBooks();
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={page === 1}>
        이전
      </button>
      <span>{page}</span>
      <button onClick={handleNext} disabled={isEnd}>
        다음
      </button>
    </div>
  );
}
