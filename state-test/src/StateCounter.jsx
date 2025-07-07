// StateParent의 자식 컴포넌트
// 부모로부터 값을 받아 변경시킴
export default function StateCounter({step, onUpdate}) {
    // 클릭될 때마다 실행되는 handleClick은 onUpdate에 step값을 전달
    const handleClick = () => onUpdate(step);
    return (
        <span>
            <button className="cnt" onClick={handleClick}>
                <span>{step}</span>
            </button>
        </span>
    )
}