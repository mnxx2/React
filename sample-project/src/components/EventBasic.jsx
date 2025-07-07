// 교재에 있는 샘플
// type 매개변수를 {} 객체로 넘겨주면 코드에 사용하기 용이
// export default function EventBasic({type}) {
    // 현재 시간 표시 : arrow function 사용
    // current가 return과 한몸이었을 때는 함수 매개변수로 type을 받았지만
    // 분해가 되었다면 current에도 type 매개변수를 넘겨줘야 한다
    const current = (type) => {
        // 날짜/시간을 관리하는 Date객체 생성
        const d = new Date();

        // 타입에 따라 보여지는 것이 다름
        // switch가 이벤트 핸들러가 되는 것
        // break을 사용하지 않으면 default값까지 모두 표시
        switch(type) {
            case 'date':
                // Date.toLocaleDateString() : 날짜만 표시
                console.log(d.toLocaleDateString());
                break;
            case 'time':
                // Date.toLacaleTimeString() : 시간만 표시
                console.log(d.toLocaleTimeString());
                break;
            default:
                // Date.toLocaleString() : 날짜와 시간 모두 표시
                console.log(d.toLocaleString());
        }
    }

    // return (
    //     <div>
    //         {/* 함수를 이벤트 핸들러 속성을 받는다 */}
    //         {/* 이벤트명은 camelCase */}
    //         <button onClick={current}>현재 시각 가져오기</button>
    //     </div>
    // ) 
// }

// current 함수와 Return 함수를 나눴을 때 : 기능별 분해
// 
export default function EventBasic({type}) {
    return (
        <div>
            {/* 화살표 함수를 사용해 onClick 이벤트에 current 함수 지정 */}
            <button onClick={() => {current(type)}}>현재 시각 표시</button>
        </div>
    )
}