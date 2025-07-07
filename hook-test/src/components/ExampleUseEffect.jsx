import { useEffect, useState } from "react";

// useEffect를 사용해 파싱
export default function ExampleUseEffect() {
    const [count, setCount] = useState(0);

    // didmount 될때 한번 실행됨
    useEffect(() => {
        // 문서의 타이틀(탭)에 출력
        document.title = `${count}번 클릭했습니다`;

        // 의존성 배열 : 함수를 실행시킬 조건
        // 변경되었을 때 useEffect가 실행되어야 하는 변수들
        // []일 경우 최초 한번만, 생략할대는 렌더링될때마다 실행
        // 배열 자체가 아예 없을 경우 리렌더링 될때마다 실행(무조건 실행)
    }, [count]);

    return (
        <div>
            <p>{count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    )
}