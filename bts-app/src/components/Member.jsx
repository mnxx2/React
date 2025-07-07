// 적용받을 css 파일 import
import './Member.css';

// 각 멤버의 정보(이미지, 이름, 설명)을 담은 카드div 생성 함수
export default function Member({member}) {
    // 객체 분해 : member에서 값이 하나씩 나와 각 image와 nick에 들어감
    const {image, nick} = member;

    return (
        // 각 멤버의 이미지와 이름, 설명이 나오는 카드 생성
        <div className="member-card">
            <img src={image} alt={`${nick}사진`} className="photo" />
            <h1 className="nick">{nick}</h1>
            <p className="team">BTS</p>
        </div>
    )
}