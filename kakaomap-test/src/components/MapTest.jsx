import { Map, MapMarker } from "react-kakao-maps-sdk";

// 기본 map 생성을 위한 test 컴포넌트
export default function MapTest() {
    return (
        // center : 기준이 될 위치의 위도(lat)와 경도(lng) 설정 > 객체로 넣기
        // level : 확대(zoom)를 얼마나 할건지 단계 설정
        // style로 크기 설정 
        <Map center={{lat: 37.463217, lng: 126.906178}} level={3}
        style={{width: '500px', height: '500px'}}>
            {/* map에 marker 표시 : 현재 위치 표시(center의 위/경도를 position 속성으로 설정) */}
            <MapMarker position={{lat: 37.463217, lng: 126.906178}}></MapMarker>
        </Map>
    )
}