import { useState } from "react";

// 로그인 상태에 따라 환영 메시지 출력
function Greeting({isLoggedIn}) {
    return <h1>{isLoggedIn ? "환영합니다!" : "로그인해주세요."}</h1>
}

// 로그아웃 상태에서 로그인 버튼 출력
function LoginButton({onClick}) {
    return <button onClick={onClick}>로그인</button>
}

// 로그인 상태에서 로그아웃 버튼 출력
function LogoutButton({onClick}){
    return <button onClick={onClick}>로그아웃</button>
}


// 로그인 버튼을 누르면 환영 메시지와 함께 버튼이 로그아웃으로 바뀌고
// 로그아웃 버튼을 누르면 다시 로그인 버튼으로 바뀌는 함수
export default function LoginControl(props) {
    // 로그인 상태와 로그인 상태를 바꿀 함수를 useState
    // useState의 기본 초기값은 false로 로그아웃 상태
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 로그인 버튼을 누르면 로그인 상태가 true로 변경
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    // 로그아웃 버튼을 누르면 로그인 상태가 false로 변경
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {isLoggedIn ? (
                // 로그인 상태가 true면 로그아웃 버튼이 생김
                <LogoutButton onClick={handleLogoutClick}/>
            ) : (
                // 로그인 상태가 false면 로그인 버튼이 생김
                <LoginButton onClick={handleLoginClick}/>
            )}
        </div>
    )
}