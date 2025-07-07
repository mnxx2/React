import { useContext } from 'react';
import './Blog.css';
import SelectedContext from '../common/SelectedContext';

// bloglist에서 하나씩 넘어오는 blog 정보를 카드로 생성
export default function Blog({blog}) {
    const {thumbnail, title, blogname} = blog;
    
    const {setSelected} = useContext(SelectedContext);
    // blog를 선택하면 useContext를 통해 selectedcontext 값 변경/사용
    const handleClick = () => setSelected(blog);

    return(
        <div className="blog-item" onClick={handleClick}>
            <img src={thumbnail} alt={title} />
            <div className="blog-info">
                {/* 위험한 html 삭제 등의 기능을 하는 속성, 속성의 값에 대한 대응으로 태그 안에 넣는 값 입력 */}
                <h3 dangerouslySetInnerHTML={{__html:title}}></h3>
                <p>{blogname}</p>
            </div>
        </div>
    )
}