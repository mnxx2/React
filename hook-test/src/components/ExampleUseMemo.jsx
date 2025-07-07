import { useMemo, useState } from "react";

export default function ExampleUseMemo({number}) {
    const expensCalc = (num) => {
        console.log('비싼 연산 중 . . .');
        return num * 2;
    };

    const memoizedValue = useMemo(() => expensCalc(number), [number]);
    // 원래는 아래와 같은 형태인데 비싼 연산을 매번 실행하는 것이 비효율적이기 때문에 useMemo 사용
    // const memorizedValue = expensCalc(number);

    return <div>결과 : {memoizedValue}</div>
}