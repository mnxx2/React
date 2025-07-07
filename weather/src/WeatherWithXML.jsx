import { useEffect, useState } from "react";

// weather api XML 파싱
export default function WeatherWithXML() {
    // 날씨 api를 불러올때 필요한 관리값들
    const city = 'seoul';
    const appid = '8f9cade9401a9bb551cc90c6f5f28d45';
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    // 한 번만 실행하여 날씨api를 받아오기 위한 함수 정의
    // 날씨가 바뀔때마다 반복해서 렌더링을 해줘야 하는데 전체 dom이 아니라 부분을 바꾸기 때문에 빠르고 효율적이므로 사용
    useEffect(() => {
        // await를 사용하기 위해 async 사용
        const fetchWeatherXML = async () => {
            const endPoint = 
            `https://api.openweathermap.org/data/2.5/weather?q=${city}
            &units=metric&appid=${appid}&lang=kr&mode=xml`

            try {
                // query param으로 값이 모두 들어가기 때문에 headers 필요 없음
                const response = await fetch(endPoint)

                // weather data 검증
                if(!response.ok) {
                    throw new Error(`데이터를 가져오지 못했습니다.`, response.status);
                }

                // xml 파싱
                // json은 obj 개념이기 때문에 그냥 넘어와서 값을 보여주지만 xml은 파싱 필요
                // text() : response로 넘어오는 값들(태그들)을 전부 그대로 보여줌
                const text = await response.text();
                // paser : 해석기
                // DOMParser : 파싱해주는 함수, import 하지 않음 > 브라우저 내장 객체
                const parser = new DOMParser();
                // String으로부터 파싱을 하는 함수
                const xml = parser.parseFromString(text, 'application/xml');

                // 파싱된 xml로부터 값 가져오기
                // querySelector로 element[1]을 가져옴 > 태그들의 순서대로 인덱스 사용
                const tempNode = xml.querySelector('temperature');
                // xml 요소는 attribute 형태로 값을 가져오기 때문에 속성을 가져오는 함수 사용
                // ? : 옵셔널 체이닝. 값이 null일때 에러가 나므로 에러를 피하고 Null을 가져온다는 의미
                const temp = tempNode?.getAttribute('value');
                const weather = xml.querySelector('weather')?.getAttribute('value');
                const icon = xml.querySelector('weather')?.getAttribute('icon');

                // 값이 같이 바뀌는 temp, weather, icon은 setWeather로 관리
                // 이는 const tempWeather = {temp, weather, icon} 형태와 같다
                // 즉, 객체로 묶어서 setWeahter로 관리한다
                setWeather({temp, weather, icon})

            } catch(error) {
                setError(error);
            }
        }

        // 정의한 함수 호출
        fetchWeatherXML();
    }, [])  // 의존성 배열 : 한 번만 실행하려면 빈 배열, 특정한 값이 바뀔때마다 사용하려면 값을 배열에 추가


    // error 발생 시 화면에 error 출력
    if(error) {
        return <div>오류발생 : {error}</div>
    }

    // weather data를 아직 받지 못했을 때 화면에 출력
    if(!weather) {
        return <div>날씨정보 로딩중. . .</div>
    }

    return (
        // JavaScript 객체로 바꾼 style 객체는 inline style 속성으로 지정
        <div style={styles.card}>
            {/* json 처리와 달리 setWeather에 값을 넣었으므로 weather.icon으로 사용 가능 */}
            <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
                style={styles.img}/>
            {/* 날씨 정보를 받아오기 위해서는 weather 객체의 weather 안에 있는 0번째 description를 가져와야 한다 */}
            <div className="weather-info">
            <p className="weather-desc">{weather.weather}</p>
            <p className="weather-temp">🌡️{weather.temp}℃</p>
            </div>
        </div>
    )
}

// style 지정
// css 문법에서 자바스크립트 객체로 바꿨기 때문에 camelCase 사용
const styles = {
    card: {
        padding: '0.5rem',
        borderRadius: '0.5rem',
        backgroundColor: '#e0f7fa',
        textAlign: 'center',
        boxShadow: '0 2px 0.5rem rgba(0, 0, 0, 0.2)',
        width: '5rem'
    },
    img: {
        width: '3rem'
    }
}