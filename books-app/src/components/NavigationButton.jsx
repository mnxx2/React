import './BookChange.css'

export default function NavigationButton({current, handleChange}) {
    return (
        <div className="button-container">
            {/* 이전 버튼 클릭 시 current - 1 값을 handleChange에 전달 */}
            <button onClick={() => handleChange(current - 1)}>이전</button>
            {/* 다음 버튼 클릭 시 current + 1 값을 handleChange에 전달 */}
            <button onClick={() => handleChange(current + 1)}>다음</button>
        </div>
    )
}