import { useState } from "react";

// select를 사용하는 form 제어 컴포넌트
export default function FormTest() {
    // Form 객체 관리, 초기값 지정
    const [form, setForm] = useState({
        // select 값 객체
        animal:'dog',
        // select multiple 값 객체 - 여러 개로 들어오므로 배열이 된다
        animals: ['dog', 'cat'],
        // radio 값 객체
        os: 'mac',
        // checkbox 값 객체
        agreement: true,
    });

    // select의 옵션이 바뀌면 해당 옵션 요소의 Name으로 값을 가져옴
    // radio의 값이 바뀌면 해당 요소의 name으로 값을 가져옴
    // 이벤트를 가진 요소가 name 속성을 가지고 있는 형태라면 여러 요소에서 다같이 사용 가능
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    // 일단 select-multiple의 옵션들을 전부 가져온 뒤 검증과 삽입 작업
    const handleFormList = (e) => {
        // 하나일수도 여러개일수도 있으므로 값들을 담을 배열 생성
        const data = [];
        // 가지고 있는 옵션들을 전부 가져온다
        const opts = e.target.options;

        // 옵션들이 들어있는 Opts를 순회하며 값이 선택되었는지 확인 후 배열에 집어넣는다
        for (const opt of opts) {
            // 해당 옵션이 선택된 객체인지 확인, 값을 배열에 집어넣기
            if(opt.selected) {
                data.push(opt.value);
            }
        }

        // 선택된 값들만 가지고 있는 data 배열을 form 객체에 집어넣기
        setForm({
            ...form,
            [e.target.name]:data,
        })
    }


    // checkbox의 값이 바뀌면 checked 값을 가져온다
    // 이 작업을 해주지 않으면 초기화에 의해 체크박스가 계속 체크 true 상태가 된다
    const handleFormChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.checked,
        })
    }

    const send = () => {
        console.log(`좋아하는 동물 : ${form.animal}`)
        console.log(`좋아하는 동물들 : ${form.animals}`)
        console.log(`사용 OS : ${form.os}`)
        // agreement의 값이 true면 동의 , false면 비동의
        console.log(`동의 여부 : ${form.agreement ? '동의' : '비동의'}`)
    }

    return (
        <form>
            <label htmlFor="animal">좋아하는 동물 : </label>
            <select name="animal" id="animal"
                value={form.animal}
                onChange={handleForm}>
                <option value="dog">개</option>
                <option value="cat">고양이</option>
                <option value="hamster">햄스터</option>
                <option value="rabbit">토끼</option>
            </select>

            <br/>
            <label htmlFor="animals">좋아하는 동물들</label>
            <select name="animals" id="animals"
                value={form.animals}
                onChange={handleFormList}
                // multiple이 true면 다중 선택 가능
                multiple={true}
                // 보이는 옵션의 개수 지정
                size={4}>
                <option value="dog">개</option>
                <option value="cat">고양이</option>
                <option value="hamster">햄스터</option>
                <option value="rabbit">토끼</option>
            </select>

            <br/>
            <fieldset>
                <legend>사용OS : </legend>
                <label htmlFor="os_win">Windows</label>
                <input type="radio" name="os" id="os_win"
                        value="windows"
                        checked={form.os === "windows"}
                        onChange={handleForm} />
                <label htmlFor="os_mac">macOS</label>
                <input type="radio" name="os" id="os_mac"
                        value="mac"
                        checked={form.os === "mac"}
                        onChange={handleForm} />
                <label htmlFor="os_lin">Linux</label>
                <input type="radio" name="os" id="os_lin"
                        value="linux"
                        checked={form.os === "linux"}
                        onChange={handleForm} />
            </fieldset>

            <br/>
            <label htmlFor="agreement">동의합니다 : </label>
            <input type="checkbox" name="agreement" id="agreement"
                checked={form.agreement}
                onChange={handleFormChecked} />
            <button type="button" onClick={send}>보내기</button>
        </form>
    )
}