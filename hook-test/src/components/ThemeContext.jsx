import { createContext } from "react";

// context 사용
const ThemeContext = createContext();
// 디버깅 에러 발생 값 사용 등 여러 상황에서 확인하기 위한 이름 지정
ThemeContext.displayName = 'ThemeContext';
// 하위 컴포넌트들이 사용해야 하므로 반드시 export
export default ThemeContext;