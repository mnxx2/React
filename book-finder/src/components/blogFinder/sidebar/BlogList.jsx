import Blog from "./Blog"
import './BlogList.css';

// blog를 여러개 나열하는 컴포넌트
export default function BlogList({blogs}) {
    return (
        <div className="blog-list">
            {
                blogs.map((blog) => {
                    return (
                        <div key={blog.blogname}>
                            <Blog blog={blog} />
                        </div>
                    )
                })
            }
        </div>
    )
}