// 버튼을 누를때마다 1씩 증가하는 이벤트 함수
export default function Counter({init}) {
    let count = init;

    // 1씩 증가 함수
    const handleClick = () => {
        count += 1;
        // id를 사용해 버튼의 값에 결과 값 출력
        // react 코드가 아닌 js 코드 형태이다
        document.getElementById('counter').innerText = `현재 클릭 수 : ${count}`
    };

    // 1씩 증가하는 함수를 이벤트로 둔 버튼 생성 및 출력
    return (
        <div>
            <h1>클릭 카운터</h1>
            <p>현재 클릭 수 : {init}</p>
            {/* 숫자가 바뀌기 위해서는 버튼에 id 부여 후 이벤트 결과 받아오기 */}
            <button id="counter" onClick={handleClick}>클릭하세요</button>
        </div>
    )
}