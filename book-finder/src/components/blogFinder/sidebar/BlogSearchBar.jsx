import './BlogSearchBar.css';

export default function BlogSearchBar({query, setQuery, searchBlogs}) {
    const handleChange = (e) => setQuery(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        searchBlogs();
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text" value={query} placeholder='검색어를 입력하시오'
                onChange={handleChange}/>
            <button type="submit">검색</button>
        </form>
    )
}