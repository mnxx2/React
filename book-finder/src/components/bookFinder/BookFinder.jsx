
import { useState } from "react";
import BookDetail from "./BookDetail";
import Footer from "../Footer";
import Header from "../Header";
import SearchArea from "./sidebar/SearchArea";
import BookContext from "./BookContext";

// bookfinder의 모든 컴포넌트를 추가해서 하나의 북파인더 페이지를 만드는 컴포넌트
// 이 컴포넌트만 app.js에 추가하면 모두 출력되므로 더이상 app.js에 따로 추가할 컴포넌트는 없다
export default function BookFinder() {
    // 책을 선택하면 선택된 책의 정보를 bookdetail에 나타낼 수 있도록 선택 정보 관리
    // 초기값은 null로 책이 선택될 때 해당 책의 정보가 들어간다
    const [selected, setSelected] = useState(null);

    return (
        // 책이 선택되었을 때 선택된 책을 설정할 수 있도록 하위 컴포넌트로 관리함수 전달
        <BookContext.Provider value={{setSelected}}>
            <div className="App">
                <Header />
                <div className="main-content">
                    {/* SearchArea는 실제로 책을 검색하거나 선택하는 역할 */}
                    <SearchArea />
                    {/* 선택된 책을 setSelected 함수를 통해 BookDetail에 전달 */}
                    <BookDetail book={selected}/>
                </div>
                <Footer />
            </div>
        </BookContext.Provider>
    )
}