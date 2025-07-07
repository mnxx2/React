// State 끌어올리기 - 부모, 자식1, 자식2 중 자식1
// 부모로부터 부모의 상태를 변경할 수 있는 도구를 함수로 전달받아 값 변경
export default function Child1({inputChange}) {
    // input이 이벤트의 타겟이 되어 입력되는 값을 받아 onInputChange의 매개변수로 넣어준다
    const handleChange = (e) => {
        inputChange(e.target.value);
    }

    return (
        <div>
            {/* inputChange는 이벤트가 아니지만 onChange는 이벤트 */}
            <input type="text" id="child1-input" onChange={handleChange} placeholder="입력하시오"/>
        </div>
    )
}