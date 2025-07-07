import { useReducer, useState } from "react";

export default function ExampleUseReducer() {
    // countReducer는 현재 값인 current와 action을 전달받음
    // action에 따라 값 변경이 달라짐
    function countReducer(current, action) {
        // inc, dec 객체를 action으로 받아 사용
        if(action.type === 'INC') {
            return current + action.step;
        } else if (action.type === 'DEC') {
            return current - action.step;
        }
    }

    // 실제로 count를 변경해주는 countReducer에게 값 전달, 초기값 설정
    // 함수명은 자유지만 관례대로 역할을 부여해서 이름을 지음
    // countDispatch는 전달자 사용자 -> dispatch -> reducer -> 값(count) 변경
    const [count, countDispatch] = useReducer(countReducer, 0);
    // step 값에 따라 count를 계산하기 위해 step 추가
    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        setStep(Number(e.target.value));
    }

    // 버튼을 클릭했을 때 값을 증가
    function increase() {
        // 값을 변경하기 위해 countDispatch에게 increase action 전달
        // counstDispatch는 전달받은 action을 그대로 countReducer에게 전달
        // action은 일종의 주문서 : 값을 어떻게 변경시켜달라고 요청하는 주문서
        // action 타입은 사용자가 지정할 수 있으며, 여러개를 전할 때는 객체로 전달
        // countDispatch('INC');

        // step과 액션을 같이 전달해야 하기 때문에 객체로 전달
        countDispatch({type:'INC', step});
    }

    // 버튼을 클릭했을 때 값을 감소
    function decrease() {
        // 값을 변경하기 위해 countDispatch에게 decrease action 전달
        // counstDispatch는 전달받은 action을 그대로 countReducer에게 전달
        countDispatch({type:'DEC', step:step});
    }

    return (
        <div>
            <input type="button" value="-" onClick={decrease} />
            <input type="button" value="+" onClick={increase} />
            <input type="text" onChange={handleChange} value={step} />
            <span>{count}</span>
        </div>
    )
}