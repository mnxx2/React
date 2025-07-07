import { useState } from "react"

// form을 통해 제어되는 제어 컴포넌트
export default function StateForm() {
    // form의 초기화 값은 name:'오이영', age:20
    const [form, setForm] = useState({name:"오이영", age:20})
    // input에 이벤트가 있고 값을 가져와야 하므로 e 부여
    // 이벤트를 사용하는 Input이 여러개여도 같이 사용
    const handleForm = (e) => {
        setForm({
            // ... : 스프레드 연산자, 객체를 펼치는 역할
            // ...form은 name:"오이영", age:20 형태와 같다
            // 이벤트가 발생하기 전에는 변경된(이벤트) 값으로 변경되지 않는다
            // 따라서 초기값을 지정하기 위해 ...form 스프레드 사용
            ...form,
            // [name]: value 과 같은 형태
            // e.target.name : computed attribute : 계산된 속성명
            // 이 방법은 값에 접근하는 방법
            // target의 name을 key로 사용하여 값을 가져오라는 뜻
            [e.target.name]: e.target.value,
        });
    };

    // button을 클릭할 때 실행되는 함수
    // 
    const show = () => {
        console.log(`안녕하세요!, ${form.age}세 ${form.name}입니다.`)
    }


    return (
        <form action="">
            <div>
                <label htmlFor="name">이름 : </label>
                <input type="text" name="name" id="name" 
                    onChange={handleForm} value={form.name}/>
            </div>
            <div>
                <label htmlFor="age">나이 : </label>
                <input type="number"
                        name="age" id="age" 
                        onChange={handleForm} 
                        value={form.age}
                />
            </div>
            <div>
                <button type="button" onClick={show}>보내기</button>
            </div>
            <p>안녕하세요, {form.age}세 {form.name} 입니다.</p>
        </form>
    )
}