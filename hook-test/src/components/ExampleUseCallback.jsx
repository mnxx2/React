import { useCallback, useState } from "react";

export default function ExmplaeUseCallback() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        // count는 값이 변하기 때문에 리렌더링 됨
        // 이때 count 값이 바뀌면 useCallback()에 매개변수로 의존성 배열 [count] 추가
        console.log(count);
        console.log('버튼 클릭');
    }, [count]);

    return (
        <div>
            {/* 클릭은 저장되어 있는 값(재생성되어있는)만 출력 */}
            <button onClick={handleClick}>클릭</button>
            {/* 카운트 증가는 count의 값을 +1 변경함으로써 함수 재생성 */}
            <button onClick={() => setCount(count + 1)}>카운트 증가</button>
        </div>
    )
}