import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

// State 끌어올리기 - 부모, 자식1, 자식2 중 부모
// 자식1로부터 상태를 변경당해 자식2에게 변경된 값 전달하는 역할
// 자식1에게 상태를 변경할 수 있는 도구를 함수로 전달
export default function ParentComponent() {
    // useState를 사용해 inputValue 변경
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (value) => {
        setInputValue(value);
    };

    return (
        <div>
            <h1>State 올리기</h1>
            <Child1 onInputChange={handleInputChange} />
            <Child2 value={inputValue} />
        </div>
    )
}