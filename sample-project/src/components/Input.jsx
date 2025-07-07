import { useState } from "react";

// input에 입력한 값을 아래에 출력하는 함수 : useState 사용
export default function LiveInput() {
    // useState에 초기값을 입력해주지 않으면 Null이 된다
    const [text, setText] = useState('');

    // e는 이벤트의 상수
    const handleChange = (e) => {
        // 이벤트의 타겟(가리키고 있는 요소)의 값을 가져온다
        // 여기서는 onChange 이벤트가 적용되는 input이 타겟이다
        setText(e.target.value);
    };

    return (
        <div>
            <h2>✏️ 실시간 입력 보기</h2>
            <input type="text" value={text}
                onChange={handleChange} placeholder="내용을 입력하시오" />
            <p>입력한 내용 : <strong>{text}</strong></p>
        </div>
    );
}