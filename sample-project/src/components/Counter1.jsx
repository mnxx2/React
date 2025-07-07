import { useState } from "react";

// function comoponent에서 동적인 값 변경을 위해 useState와 Hook을 사용
export default function Counter1({init}) {
    // useState는 두개의 값을 반환한다
    // 첫번째는 관리할(사용할) 속성, 두번째는 그 속성값을 관리할(설정할) 함수
    // 배열의 형태로 반환
    // count라는 속성을 생성하고, count의 값을 바꿔줄 setCount 함수를 만드는 것
    // [속성, set속성(함수)]의 형태
    // useState()의 매개변수에는 속성의 초기화값이 온다
    const [count, setCount] = useState(init);
    const handleClick = () => {
        // 호출될때마다 count값이 1씩 증가
        // 호출이 여러번 되어도 1씩 증가됨
        // 왜냐하면 한번 호출될때마다 다시 렌더링하기 때문
        // 리렌더링이 되면 component가 지워졌다가 다시 그려짐 > 아래의 setCount는 실행되지 않음
        // 여러번 호출되는 값을 출력하려면 첫번째 setCount를 함수로 호출
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
    }

    return (
        <div>
            <h1>클릭 카운트 : useState 사용</h1>
            <p>현재 클릭 수 : {count}</p>
            {/* 매개변수 전달 없이 함수명만 전달 */}
            {/* 매개변수를 전달하려면 화살표 함수로 함수 호출 */}
            <button onClick={handleClick}>클릭하세요</button>
        </div>
    )
}