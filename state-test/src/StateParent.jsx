import { useState } from "react";
import StateCounter from "./StateCounter.jsx";

// useState를 사용해 state 올리기
export default function StateParent() {
    const [count, setCount] = useState(0);
    // step이라는 화살표 함수 안에 setCount 함수를 콜백
    // const update = step => setCount(c => c + step);
    // 위의 간소화된 식을 풀어쓰면 아래와 같다
    const update = (step) => {
        setCount((c) => {return c + step})
    }

    return (
        <>
        {/* 자식 컴포넌트가 여러개이므로 state도 묶어서 한번에 관리한다 */}
            <p>total : {count}</p>
            <StateCounter step={1} onUpdate={update} />
            <StateCounter step={5} onUpdate={update} />
            <StateCounter step={-1} onUpdate={update} />
            <StateCounter step={2} onUpdate={update} />
        </>
    )
}