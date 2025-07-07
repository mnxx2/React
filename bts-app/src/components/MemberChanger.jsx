import { useState } from "react";
import Member from "./Member";
import NavigationButton from "./NavigationButton";
import './MemberChanger.css';

export default function MemberChanger({members}) {
    const [index, setIndex] = useState(0);
    // newIndex를 받아서 setIndex로 값 변경
    const changeIndex = (newIndex) => {
        // 인덱스가 0 이하로 가거나 7 이상 가면 안되기 때문에 길이 지정
        const len = members.length;
        // 값이 0 ~ 6 까지만 나오기 때문에 순환
        // 음수가 나오면 에러 : 음수가 나오지 않도록 len이 나눠야할 숫자를 크게 만들어준다
        setIndex((newIndex + len * 100) % len)
    }

    return (
        <div className="member-container">
            <Member member={members[index]}></Member>
            <NavigationButton current={index} changeIndex={changeIndex}></NavigationButton>
        </div>
    )
}