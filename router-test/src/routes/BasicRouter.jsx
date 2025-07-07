import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ArticlePage from "../pages/ArticlePage";

// router는 array의 형식을 띄고 있는 객체
// naver 페이지 속의 스포츠, 뉴스, 연예 등의 메뉴와 비슷하다고 이해
const router = createBrowserRouter([
    {
        // path는 각 페이지의 주소
        path:'/',
        // element는 각 페이지를 태그로 삽입
        element: <MainPage/>
    },
    {
        path:'/about',
        element: <AboutPage/>
    },
    {
        path:'article',
        element: <ArticlePage/>
    }
])

// function이나 class가 아니면 직접적으로 export default를 적지 못함
export default router;