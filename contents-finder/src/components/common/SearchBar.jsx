import { useRef } from 'react';
import './SearchBar.css';
export default function SearchBar({ setQuery, setPage }) {
  const inputElement = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputElement.current.value);
    setPage(1);
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색어를 입력하시오."
        ref={inputElement}
      />
      <button type="submit">검색</button>
    </form>
  );
}
