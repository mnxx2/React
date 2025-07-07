import './Header.css';

// BTS 카드 모음 위에 bts-launch.png를 포함한 헤더를 만드는 함수
// 범용으로 사용 가능하도록 image, title을 매개변수로 받아 사용
export default function Header({image, title}) {
    const head = '/bts/bts-launch.png';

    return (
        <div className="header">
            <img src={image} alt={`${title} header`} className='header-image'/>
            <h1 className='header-title'>{title}</h1>
        </div>
    )

}