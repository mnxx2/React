import { useState } from "react"

// checkbox multi를 사용하는 form 제어 컴포넌트
export default function FormTest1() {
    // form 객체 관리, 초기값 지정
    const [form, setForm] = useState({
        animals: ['dog', 'cat'],
    });

    // 체크되어 있는 상태에서 체크 true/false에 따라 배열에 값 추가/삭제
    // 체크값이 변경되는 이벤트가 실행되면 체크 true/false에 따라 배열에 값 추가/삭제
    const handleFormMulti = (e) => {
        // animals에 해당하는 요소들을 모두 가져옴
        const array = form.animals;

        // 요소가 체크되어 있는지 확인 후 배열 추가/삭제 작업
        if(e.target.checked) {
            // checked true 상태라는 것은 이전에는 체크되지 않은 상태였다는 뜻
            // array안에 true가 된 값을 추가해야함
            array.push(e.target.value);
        } else {
            // checked false 상태라는 것은 이전에는 체크가 되어 있었다는 뜻
            // array안에 false가 된 값이 들어있으므로 제거해야함
            // 중간부터 제거할 수 있는 splice 사용
            // 어디부터 제거해야 하는지 알아야 하므로 indexOf 사용해서 해당 인덱스를 가진 요소를 지정
            array.splice(array.indexOf(e.target.value), 1)
        }

        setForm({
            ...form,
            [e.target.name]:array,
        })
    }

    const send = () => {
        console.log(`좋아하는 동물들 : ${form.animals}`)
    }
    
    return (
        <form>
            <fieldset>
                <legend>좋아하는 동물 : </legend>
                <label htmlFor="animal_dog">개</label>
                <input type="checkbox" name="animals" id="animal_dog" 
                    value="dog"
                    checked={form.animals.includes('dog')}
                    onChange={handleFormMulti}/>
                <br/>
                <label htmlFor="animal_cat">고양이</label>
                <input type="checkbox" name="animals" id="animal_cat" 
                    value="cat"
                    checked={form.animals.includes('cat')}
                    onChange={handleFormMulti}/>
                <br/>    
                <label htmlFor="animal_hamster">햄스터</label>
                <input type="checkbox" name="animals" id="animal_hamster" 
                    value="hamster"
                    checked={form.animals.includes('hamster')}
                    onChange={handleFormMulti}/>
                <br/>
                <label htmlFor="animal_rabbit">토끼</label>
                <input type="checkbox" name="animals" id="animal_rabbit" 
                    value="rabbit"
                    checked={form.animals.includes('rabbit')}
                    onChange={handleFormMulti}/>
            </fieldset>
            <button type="button" onClick={send}>보내기</button>
        </form>
    )
}