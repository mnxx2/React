import { useEffect, useState } from "react";
import './Weather.css';

// weather api 사용 컴포넌트
export default function Weather() {
    // q 자리에 들어갈 도시명 seoul로 고정, appid 설정
    const city = 'seoul';
    const appid = '8f9cade9401a9bb551cc90c6f5f28d45';
    // 비동기 프로그램이기 때문에 useState로 관리, 초기값은 null
    const [weather, setWeather] = useState(null);
    // 사용자에게 에러를 컴포넌트로 보여주기 위해 관리
    const [error, setError] = useState(null);

    // useEffect는 한번만 실행
    // 한번만 실행하면 되기 때문에 useEffect 안에 함수를 만들고 실행
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // 결과값을 promise로 반환하므로 await 사용
                const response = await fetch(
                    // 바뀌어어할 부분만 ${} 표현식으로 사용
                    // 기본 방식이 get이기 때문에 method는 넣지 않아도 되며,
                    // Headers에 와야할 요소들은 url에 모두 들어가 있으므로 Url만 사용
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appid}&lang=kr`
                );

                if(!response.ok) {
                    throw new Error('날씨 정보 가져오기 실패!');
                }

                // promise를 반환하므로 await 사용
                const data = await response.json();
                // 데이터가 흩어져 있는 형태이므로 setWeather로 한번에 가져와서 관리
                // weather 객체 안에 weather가 가지고 있는 정보들이 모두 들어가므로
                // 사용할때는 weather.weather.attribute 형태로 사용
                setWeather(data);

            } catch(error) {
                setError(error);
            }
        }

        // 실행
        fetchWeather();
    }, []);

    // 에러 발생 시 화면에 error 출력
    if(error) {
        return <div>오류발생: {error}</div>
    }

    // error가 발생하지도 않았고 weather가 null -> 데이터를 받지 못한 상태
    if(!weather) {
        return <div>날씨정보 로딩중. . .</div>
    }

    const imgURL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    return(
        <div className="weather-item">
            <img src={imgURL} className="weather-icon"/>
            {/* 날씨 정보를 받아오기 위해서는 weather 객체의 weather 안에 있는 0번째 description를 가져와야 한다 */}
            <div className="weather-info">
            <p className="weather-desc">{weather.weather[0].description}</p>
            <p className="weather-temp">{weather.main.temp}℃</p>
            </div>
        </div>
    )
}