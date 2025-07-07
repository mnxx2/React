import { Map, MapMarker } from "react-kakao-maps-sdk";

// Map에 여러 개의 마커를 꽂는 컴포넌트
export default function MapMarkerTest() {
    // 현재 위치 표시
    const here = {lat: 37.463217, lng: 126.906178};
    // 마커를 찍을 장소가 여러 곳이므로 배열을 만들고 그 안에 객체로 위치들을 설정
    // latlng는 위치를 나타내는 key이름으로 정해져 있다 위도와 경도를 합친 약어
    const locations = [
        {title: '남부여성발전센터', latlng: here},
        {title: '산기슭공원', latlng: {lat: 37.463779, lng: 126.908453}},
        {title: '한울중학교', latlng: {lat: 37.462385, lng: 126.907237}},
        {title: '메가커피', latlng: {lat: 37.463128, lng: 126.904041}},
    ];

    return (
        <Map center={here} style={{width: '600px', height: '600px'}} level={3}>
            {
                // 배열로 객체들을 묶었기 때문에 map 함수를 사용해 하나씩 꺼내서 mapmarker 출력
                locations.map((location, index) => {
                    return(
                        <MapMarker 
                            key={index} 
                            position={location.latlng}
                            // marker이미지 표시(별모양) 이미지 url은 정해져 있음
                            image={{
                                src:'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
                                // 이미지의 크기 지정
                                size: {width: 24, height: 35}
                            }}
                            title={location.title}
                        ></MapMarker>
                    )
                })
            }
        </Map>
    )
}