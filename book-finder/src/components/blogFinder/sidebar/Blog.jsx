import './Blog.css';

// blog 하나의 정보를 나타내는 컴포넌트
export default function Blog({blog}) {
    const {thumbnail, title, blogname} = blog;

    return (
        <div className="blog-item">
            <img src={thumbnail} alt={`${blogname} 표지`} />
            <div className="blog-info">
                <h2 className="blog-title">{title}</h2>
                <p className="blog-name">{blogname}</p>
            </div>
        </div>
    )

}