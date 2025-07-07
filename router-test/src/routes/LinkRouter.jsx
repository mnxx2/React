import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RootPage from "../pages/RootPage";
import AboutPage from "../pages/AboutPage";
import ArticlePage from "../pages/ArticlePage";

// 페이지 내부에서 각 다른 주소로 이동할 수 있도록 라우터 생성
const linkRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        // router가 정의되지 않았을 때 에러 메시지를 띄우는 역할
        errorElement: <h1>404 요청이 잘못 되었습니다.</h1>,
        // 하위(내부) 요소, 배열 형태의 객체로 작성
        children: [
            {
                // 부모 페이지와 같은 주소를 사용하는 하위 페이지는 index: true 사용
                // false를 사용하면 부모 페이지에서 하위 페이지가 없어짐
                index: true,
                element: <MainPage />
            },
            {
                path: '/about',
                element: <AboutPage/>
            },
            {
                path: '/article',
                element: <ArticlePage/>
            }
        ]
    }
]);

export default linkRouter;