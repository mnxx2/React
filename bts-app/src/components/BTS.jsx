// 멤버 카드 전체 출력 함수
import React from "react";
import Member from "./Member";
import './BTS.css';

// members라는 속성명으로 bts 배열을 받음
export default function BTS({members}) {
    return (
        <div className="container">
            {/* map을 사용해 값을 하나씩 Member에 속성명 member로 넘겨
                모든 멤버의 카드 생성 */}
            {members.map((member) => {
                // return과 중괄호는 생략 가능, 소괄호는 반드시 있어야 함
                return (
                    <React.Fragment key={member.nick}>
                        <Member member={member}></Member>
                    </React.Fragment>
                )
            })}
        </div>
    )
}