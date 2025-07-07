import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

// 지정한 위치가 아닌 현재 위치를 알아내 현재 위치를 기준으로 지도 생성
export default function GeoLocation() {
    // map이 실행되었을 때 현재 위치를 가져와서 현재 위치를 map의 center로 설정
    // useeffect를 사용해서 현재 위치를 가져오기
    // Location에서 상태를 가져오면 바뀜

    const [location, setLocation] = useState(null);

    // 성공했을 때 실행할 함수
    const successHandler = (response) => {
        // coords: 좌표
        // response.coords가 가져온 좌표를 객체 분해
        // 이름 정해져있음
        const {latitude, longitude} = response.coords;
        setLocation({latitude, longitude});
    };
    // 실패했을 때 실행할 함수
    const errorHandler = (error) => {
        console.log(error);
    };

    useEffect(() => {
        // 윈도우에는 navigator가 내장 객체로 포함되어 있다
        // getCrre~ : 매개변수가 콜백함수로 두개를 주어야 한다 성공했을 떄 콜백함수와 실패했을 때 콜백함수
        // 각각 성공했을 때와 실패했을 때에 실행한다
        navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    }, []);

    return (
        <>
            {
                // 단축 && : location이 true이면(location이 있으면) () 안의 실행문이 반환된다
                // a && b 의 형식으로 사용되며 a가 true이면 b가 반환된다
                // a || b : a가 false이면 b가 반환된다
                location && (
                    <Map center={{lat: location.latitude, lng: location.longitude}} 
                        level={3}
                        style={{width: '500px', height: '500px'}}>
            
                        <MapMarker 
                            position={{lat: location.latitude, lng: location.longitude}}>        
                        </MapMarker>
                        {
                            // location이 true라면(있다면) 현재 위치의 위도와 경도 표시
                            location && (
                                <div>
                                    현재 위치의 좌표는
                                    <p> 위도 : {location.latitude}</p>
                                    <p> 경도 : {location.longitude}</p>
                                </div>
                            )
                        }
                    </Map>
                )
            }
        </>
    )
}