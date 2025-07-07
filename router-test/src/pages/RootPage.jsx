import { Link, NavLink, Outlet } from "react-router-dom"

export default function RootPage() {
    return (
        <>
            <h1>Root Page</h1>
            <nav>
                <ul>
                    {/* rootpage 밑(내부)에 하위 페이지를 넣어 링크를 누르면 해당 페이지로 변경 */}
                    {/* Link와 비슷하게 NavLink도 있는데, NavLink는 현재 어떤 요소가 선택되어 있는지 보여주는 태그 */}
                    {/* NavLink는 활성화가 되면 active 라는 클래스가 자동으로 부여됨 */}
                    <li><NavLink to='/'>홈</NavLink></li>
                    <li><NavLink to='/article'>기사</NavLink></li>
                    <li><NavLink to='/about'>회사소개</NavLink></li>
                </ul>
            </nav>
            {/* outlet은 출구, 통로라는 의미로 router에 설정해놓은 children 요소들이 들어간다 */}
            {/* outlet은 반드시 있어야 하며, 이 태그가 자리한 위치가 하위 페이지들이 들어가는 자리 */}
            <Outlet></Outlet>
        </>
    )
}