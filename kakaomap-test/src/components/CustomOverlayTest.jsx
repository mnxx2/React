import { useState } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";

// map 위에 사용자가 원하는 것을 덮어 씌우는(overay) 컴포넌트
export default function CustomOverlayTest() {
    // 버튼을 눌렀을 때 확대/축소하기 위해 level 관리
    const [level, setLevel] = useState(3);

    return (
        <Map center={{lat: 37.463217, lng: 126.906178}} 
            style={{width: '600px', height: '600px'}} 
            level={level}>
            {/* 어디에 표시할지 지정해야 하므로 positoind으로 원하는 위도/경도 설정 */}
            <CustomOverlayMap position={{lat: 37.463217, lng: 126.906178}}>
                <div style={styles.card}>남부여성발전센터</div>
            </CustomOverlayMap>
            {/* 버튼을 눌렀을때 확대/축소할 수 있도록 onClick으로 setlevel */}
            <button onClick={() => setLevel(level - 1)}>확대</button>
            <button onClick={() => setLevel(level + 1)}>축소</button>
        </Map>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '1rem',
    },
    card: {
        padding: '0.5rem',
        borderRadius: '0.5rem',
        backgroundColor: 'lightcoral',
        textAlign: 'center',
        boxShadow: '0 2px 0.5rem rgba(0, 0, 0, 0.2)',
        width: '8rem',
        display: 'flex',
        flexDirection: 'column',
    },
    img: {
        width: '3rem'
    }
}
