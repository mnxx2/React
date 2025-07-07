import Blog from "./Blog"

// blog 정보를 받아 map을 사용해 blog 컴포넌트에 하나씩 전달
export default function BlogList({blogs}) {
    return (
        <div className="blog-list">
            {
                blogs.map((blog, index) => {
                    return (
                        <div key={index}>
                            <Blog blog={blog} />
                        </div>
                    );
                })
            }
        </div>
    )
}