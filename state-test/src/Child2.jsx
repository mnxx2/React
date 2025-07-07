// state 끌어올리기 - 부모, 자식1, 자식2 중 자식2
// 변경된 부모의 state값을 출력
// 즉, 자식2의 값과 부모의 값 모두 계층 구조를 따라 변경된다
export default function Child2({value}) {
    return (
        <div>
            <p>입력된 값 : {value}</p>
        </div>
    )
}