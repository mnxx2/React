import { useState } from "react";

// 로그인 상태에 따라 환영 메시지 출력
function Greeting({isLoggedIn}) {
    return <h1>{isLoggedIn ? "환영합니다! 로그인 되었습니다." : "로그인 버튼을 눌러 로그인해주세요."}</h1>
}

// 로그아웃 상태에서 로그인 버튼 출력
function LoginButton({onClick}) {
    return <button onClick={onClick}>로그인</button>
}

// 로그인 상태에서 로그아웃 버튼 출력
function LogoutButton({onClick}){
    return <button onClick={onClick}>로그아웃</button>
}

// 엘리먼트 변수를 사용한 조건부 렌더링
export default function LoginControl2(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 로그인 버튼을 누르면 로그인 상태가 true로 변경
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    // 로그아웃 버튼을 누르면 로그인 상태가 false로 변경
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    // button 태그가 될 변수 선언
    let button;

    // 로그인 상태 점검
    if(isLoggedIn) {
        // 로그인 상태가 true면 로그아웃 버튼 활성화를 button 변수에 저장
        button = <LogoutButton onClick={handleLogoutClick}/>
    } else {
        // 로그인 상태가 False면 로그인 버튼 활성화를 Button 변수에 저장
        button = <LoginButton onClick={handleLoginClick}/>
    }

    return (
        <div>
            {/* 로그인 상태 받아옴 */}
            <Greeting isLoggedIn={isLoggedIn}/>
            {/* 버튼 태그 생성 */}
            {button}
        </div>
    )

}