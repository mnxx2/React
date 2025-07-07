import { useRef } from "react";

// 비제어 컴포넌트
export default function StateFormUC() {
    // 제어 컴포넌트는 form에 의해 관리되며 정보가 담겨오기 때문에 form.속성명을 사용하지만
    // 비제어 컴포넌트는 직접 관리하기 때문에 getElementById()를 통해 값을 가져와야 한다
    // 이 방법은 DOM을 전부 뒤져서 id=name을 찾아내기 떄문에 비싼 연산이라고 함
    // 이것을 방지하기 위해 hook 사용 -> useRef
    // const name = document.getElementById('name');

    // Ref = Reference 참조라는 뜻으로, 요소의 참조값(주소값)을 가져다주는 함수
    // getElementById와 달리 참조값을 가지고 있으므로 DOM을 전부 뒤지는 과정을 하지 않아도 됨
    // 초기값은 모르기 때문에 Null 사용
    const name = useRef(null);
    const age = useRef(null);


    const show = () => {
        // useRef는 상수명.current.value로 값을 가져올 수 있다
        // current : 요소의 값에 접근하는 useRef의 속성, 반드시 사용
        // 이 방법은 Element에 접근, 요소를 가져오는 것이다
        console.log(`안녕하세요!, ${age.current.value}세 ${name.current.value}입니다.`)
    }

    return (
        <form>
            <div>
                <label htmlFor="name">이름 : </label>
                {/* useRef 사용 시 요소의 참조값을 가져오기 위해 해당 요소의 속성에
                    ref={상수명}을 부여한다 */}
                <input type="text" name="name" id="name" ref={name}
                        defaultValue="오이영"/>
            </div>
            <div>
                <label htmlFor="age">나이 : </label>
                {/* defualtValue : 값을 입력하지 않은 상태의 초기값 지정 */}
                <input type="number" name="age" id="age" ref={age}
                        defaultValue={19}/>
            </div>
            <div>
                <button type="button" onClick={show}>보내기</button>
            </div>
        </form>
    );
}