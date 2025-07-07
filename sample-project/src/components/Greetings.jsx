// 조건부 렌더링 : 특정한 조건에서 렌더링을 조절
// 로그인과 회원가입을 구분해 상황에 맞게 안내문을 출력하는 함수
function UserGreeting() {
    return (
        <h1>반갑습니다. 회원님</h1>
    )
}

function GuestGreeting() {
    return (
        <h1>회원가입을 해주세요.</h1>
    )
}

export default function Greeting({isJoined}) {
    // props로 오는 값을 isJoined에 저장
    // 매개변수 자체를 {isjoined}로 받는다면 props를 사용하지 않아도 됨
    // const isJoined = props.isJoined;

    if(isJoined) {
        return <UserGreeting />;
    }

    return <GuestGreeting />;
}