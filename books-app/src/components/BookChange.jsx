import { useState } from 'react';
import './BookChange.css';
import BookCard from './BookCard';
import NavigationButton from './NavigationButton';

export default function BookChange({books}) {
    const [index, setIndex] = useState(0);

    // index 값 변경 함수
    const changeIndex = (newIndex) => {
        const len = books.length;

        // 첫 번째에서 이전을 누르면 음수가 나와 에러 발생
        // 에러를 방지하기 위해 newIndex + len * 100 으로 양수의 범위를 늘림
        setIndex((newIndex + len * 100) % len)
    }

    return (
        <div className="book-container">
            {/* [index]를 넣음으로써 books array가 아니라 item 하나만 꺼내서 넣어준다 */}
            <BookCard books={books[index]} />
            <NavigationButton current={index} handleChange={changeIndex}/>
        </div>
    )
}