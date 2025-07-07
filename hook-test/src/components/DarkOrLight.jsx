import { useState } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

// context를 사용하는 컴포넌트 생성
export default function DarkOrLight() {
    // 테마 관리, 기본값은 라이트 테마
    const [theme, setTheme] = useState('light');

    // 토글이 될때마다 다크/라이트모드로 theme를 전환하는 함수
    const toggleTheme = () => {
        // light 모드였다면 dark 모드로 전환
        if(theme === 'light') {
            setTheme('dark');
        } else {
            // dark 모드였다면 Light 모드로 전환
            setTheme('light');
        }
    }

    // context 사용
    return (
        // context로 메인 컨텐츠를 감싸주면 하위에 속하는 컴포넌트들은
        // 필요 시 props로 context를 모두 사용 가능
        // value는 객체로 전달
        // {theme:theme, toggleTheme:toggleTheme} 형태와 같다
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContent/>
        </ThemeContext.Provider>
    )
}