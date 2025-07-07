import './BlogDetail.css';

// blog의 상세 내용을 출력하는 컴포넌트
export default function BookDetail({blog}) {
    if(!blog) {
       return <p>blog를 선택하세요.</p>
    }
    return (
        <div className="blog-detail">
            <h2 className="blog-title" dangerouslySetInnerHTML={{__html:blog.title}}></h2>
            <p className="blog-name">
                <strong>블로그 : </strong>
                {blog.blogname}
            </p>
            <p className="blog-datetime">
                <strong>작성일 : </strong>
                {blog.datetime.split('T')[0]}
            </p>
            <p className="blog-contents">
                <strong>내용 : </strong>
                <p dangerouslySetInnerHTML={{__html:blog.contents}}></p>
            </p>
            <p className="blog-name">
                <strong>상세 : </strong>
                <a href={blog.url} target="_blank" rel="noopener noreferrer">상세내용</a>
            </p>
            <img src={blog.thumbnail} alt={blog.title} className="blog-img" />
        </div>
    )
}