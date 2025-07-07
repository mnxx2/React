import { useEffect, useState } from "react";

// forecast xml data를 받아 파싱, 출력 컴포넌트
// weatherwithxml과 같은 구조에 빈 배열을 넣어 값을 가져와야 한다
export default function ForecastXML() {
    const [forecasts, setForecasts] = useState([]);
    const [error, setError] = useState(null);
    const appid = '8f9cade9401a9bb551cc90c6f5f28d45';
    const city = 'seoul';
    

    useEffect(() => {
        const fetchForecast = async () => {

            const endPoint = 
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}
            &units=metric&lang=kr&appid=${appid}&mode=xml`;

            try {
                const response = await fetch(endPoint);

                if(!response.ok) {
                    throw new Error('데이터를 가져오지 못했습니다.', response.status);
                }

                // xml > text 형태로 가져옴
                const text = await response.text();
                // 파싱기
                const parser = new DOMParser();
                // 파싱기에 text를 넣어서 xml 파일임을 알려주고 파싱한 결과를 xml에 대입
                const xml = parser.parseFromString(text, 'application/xml');

                // 값 가져오기
                // forecast는 시간별 데이터를 time으로 만들어 time을 여러개 가지고 있으므로
                // getElementsByTagName()으로 time을 이름으로 가지고 있는 태그를 모두 가져온다 : array로 반환
                const timeNodes = xml.getElementsByTagName('time');

                // time이 여러개이므로 빈 배열에 timeNodes의 요소들을 하나씩 꺼내어 추가
                const arrForecast = [];
                // 자료가 너무 많아서 다 못 가져올 때 사용 방법
                // 숫자를 지정해 직접적으로 갯수 제한 : 아래와 같이 for문 사용
                // Math.min(arrForecast.length, 10) : arrForecast의 길이가 10보다 많은 것들 중 최소값 추출
                for(let i = 0; i < 10; i++) {  
                    // node는 time 태그 한 덩어리를 배열 객체로 받는다 
                    const node = timeNodes[i];

                    // // time 태그 중 from 속성 추출
                    // const str = node.getAttribute('from');
                    // // 2025-05-28T03:00:00의 형태인 from에서
                    // // T를 기준으로 앞과 뒤를 배열로 나누는데 그 중 두번째(인덱스로는 1) 추출
                    // // ["2025-05-28T", "03:00:00"]
                    // const arrTime = str.split('T');
                    // // 03:00:00 중 0번째부터 2개를 추출
                    // // '03:00:00' 의 형태
                    // const strTime = arrTime[1];
                    // // '03' 의 형태
                    // const strHour = strTime.slice(0, 2);
                    // 위의 과정을 한 줄로 기술
                    const hour = node?.getAttribute('from').split('T')[1].slice(0, 2);

                    // 기온 정보 가져오기
                    const tempNode = node.querySelector('temperature');
                    const temp = tempNode?.getAttribute('value');

                    // 날씨 정보와 아이콘 가져오기
                    const symbolNode = node.querySelector('symbol');
                    const weather = symbolNode?.getAttribute('name');
                    const icon = symbolNode?.getAttribute('var');

                    // 가져온 값들을 하나의 객체로 묶기
                    const result = {hour, temp, weather, icon};

                    // 객체를 array에 추가
                    arrForecast.push(result);
                }

                // 배열을 setForecasts에 추가해서 관리
                // 바뀔때마다 리렌더링
                setForecasts(arrForecast);
            } catch(error) {
                setError(error);
            }
        };    
        
        fetchForecast();
        // endpoint가 바뀌면 리렌더링 해야 하므로 의존성 배열에 넣으라는 에러가 발생할수도 있음
        // 하지만 endpoint는 한번만 실행되면 되기 때문에 의존성 배열에 넣지 않고
        // fetchforecast 함수 안의 try문 안으로 가져오면 된다
    }, []);

    // error 발생 시 화면에 error 출력
    if(error) {
        return <div>오류발생 : {error.message}</div>
    }

    // weather data를 아직 받지 못했을 때 화면에 출력
    if(!forecasts) {
        return <div>일기예보 로딩중. . .</div>
    }

    return (
        <div style={styles.container}>
            {
                forecasts.map((forecast, index) => {
                    return (
                        <div key={index} style={styles.card}>
                        <Img icon={forecast.icon} />
                        <p>{forecast.hour}시</p>
                        <div>
                            <p>{forecast.weather}</p>
                        <p>🌡️{forecast.temp}℃🌡️</p>
                        </div>
                    </div>
                    );
                })
            }
        </div>
    )
}

function Img({icon}) {
    return (
        <img style={{width:'50px', height:'50px'}} src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
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