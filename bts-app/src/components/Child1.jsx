// State 끌어올리기 - 부모, 자식1, 자식2 중 자식1
// 부모로부터 부모의 상태를 변경할 수 있는 도구를 함수로 전달받아 값 변경
export default function Child1({onInputChange}) {
    

    return (
        <div>
            <input type="text" id="child1-input" />
        </div>
    )
}