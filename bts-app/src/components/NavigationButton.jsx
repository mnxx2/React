// BTS의 인덱스를 증가시켜 출력되는 카드(부모)를 변경
// index를 증감시킬 current와 index 변경 함수 전달받음
export default function NavigationButton({current, changeIndex}) {
    // 인덱스 증가
    const handleNext = () => {
        changeIndex(current + 1);
    };

    // 인덱스 감소
    const handlePrev = () => {
        changeIndex(current - 1);
    }
    
    return (
        <div className="button-container">
            <button onClick={handlePrev}>⇦ 이전</button>
            <button onClick={handleNext}>다음 ⇨</button>
        </div>
    )
}