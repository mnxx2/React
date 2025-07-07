import './Book.css'
import BookContext from '../BookContext';
import { useContext } from 'react';

// 검색을 했을 때 나오는 책의 간략 정보(이미지, 제목, 저자)를 담는 카드 생성
export default function Book({book}) {
    const {thumbnail, title, authors} = book;
    const {setSelected} = useContext(BookContext);
    const handleClick = () => setSelected(book);

    return (
        <div className='book-item' onClick={handleClick}>
            <img src={thumbnail} alt={`${title} 표지`} />
            <div className='book-info'>
                <h3>{title}</h3>
                <p>{authors.join(', ')}</p>
            </div>
        </div>
    )
}