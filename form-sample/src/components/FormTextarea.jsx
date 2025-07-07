import { useState } from "react"

// textarea를 사용한 form 제어 컴포넌트
export default function FormTextarea() {
    const [form, setForm] = useState({
        comment:`안녕하세요 서울청년센터 관악 신림동쓰리룸입니다!
        2025년 고용노동부와 관악구와 함께하는 <청년 성장 프로젝트> 6월 프로그램 모집중입니다.
        청년 성장 프로젝트의 다양한 프로그램을 통해 미취업 청년, 직장적응이 필요한 청년, 사회초년생 등 다양한 청년 분들을 만나며 맞춤형 지원을 제공할 예정입니다.
        많은 관심 부탁드립니다!
        매월 초기 상담과 맞춤형 프로그램을 준비할 예정입니다.
        참가를 희망하시는 분은 아래의 설문지에 응답 부탁드립니다!
        감사합니다.`
    });

    // 호출될때마다 name=comment요소의 값을 가져와 리렌더링
    const handleForm = (e) => {
        setForm(
            {
                ...form,
                // target의 name 속성을 Key로 사용해서 값을 가져오라는 뜻
                [e.target.name]:e.target.value
            }
        )
    }

    const send = () => {
        console.log(`comment : ${form.comment}`)
    }

    return (
        <form>
            <label htmlFor="comment">댓글</label><br/>
            {/* cols : 한 줄에 몇 자까지 보여줄 것인지 지정
                rows : 몇 줄을 보여줄 것인지 지정 */}
            <textarea name="comment" id="comment" cols="30" rows="7"
                    value={form.comment} onChange={handleForm}></textarea><br/>
            <button type="button" onClick={send}>보내기</button>
        </form>
    )
}