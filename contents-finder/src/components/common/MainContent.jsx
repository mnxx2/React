import SelectedContext from "./SelectedContext";
import SearchArea from "./SearchArea";
import BookDetail from "../bookFinder/BookDetail";
import BlogDetail from "../blogFinder/BlogDetail";
import { useState } from "react";

// 화면이 바뀌어야 하는 영역, 상황에 따라 바뀌어야 하므로 searcharea, bookdetail, blogdetail이 필요하다
// selelcted는 이곳에서만 관리
// search 결과에 따라 selelcted가 바뀌고 그에 따라 detail이 바뀐다
export default function MainContent({type}) {
    // selected 관리
    const [selected, setSelected] = useState(null);

    // 블로그로 바뀔 떄 필요한 것은 searcharea, blogdetail
    const blog = (
        <>
            <SearchArea type="blog"></SearchArea>
            <BlogDetail blog={selected}></BlogDetail>
        </>
    )

    // 책으로 바뀔 떄 필요한 것은 searcharea, bookdetail
    const book = (
        <>
            <SearchArea type="blog"></SearchArea>
            <BookDetail book={selected}></BookDetail>
        </>
    )

    return (
        <SelectedContext.Provider value={{setSelected}}>
            {
                // 위에서 이미 book과 blog에 필요한 태그를 입력해놨으므로 삼항 연산자로 결과 출력
                type==='book'?book:blog
            }
        </SelectedContext.Provider>
    )

}