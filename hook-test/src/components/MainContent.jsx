import { useContext } from "react";
import ThemeContext from "./ThemeContext";

// context를 상위 컴포넌트로 두는 메인 컨텐트
export default function MainContent() {
    // context가 value를 객체로 전달하기 때문에 useContext도 값을 객체로 반환
    // 초기값으로 context 지정
    // 위에서부터 전달받지 않고 바로 context 값 사용 가능
    const {theme, toggleTheme} = useContext(ThemeContext);

    // css를 자바스크립트 객체로 표현
    // 자바스크립트 객체로 표현되기 때문에 세미콜론이 아닌 쉼표 사용
    const style = {
        width: '100vw',
        height: '100vh',
        padding: '2rem',
        // 자바스크립트 표현식이므로 삼항조건식 사용 가능
        backgroundColor: theme==='light'?'white':'black',
        color: theme === 'light' ? 'black' : 'white',
    };

    return (
        <div style={style}>
            <p>안녕하세요</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    )
}