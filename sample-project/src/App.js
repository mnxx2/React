import './App.css';
import Book from './components/Book';
// Book을 모아놓은 라이브러리 import
import Library from './components/Library';
// EventBasic 이벤트 함수 import
import EventBasic from './components/EventBasic';
// 버튼을 누를때마다 1씩 증가하는 이벤트 함수 import
import Counter from './components/Count';
// 버튼을 누를때마다 1씩 증가하는 이벤트 함수 useState 사용 import
import Counter1 from './components/Counter1';
// class component에서 버튼 클릭시 1씩 증가하는 이벤트 클래스 State 사용 import
import ClassCounter from './components/Counter2';
// input에 입력한 값을 아래에 출력하는 이벤트 함수 : useState 사용 import
import LiveInput from './components/Input';
// 조건부 렌더링으로 상황에 맞는 안내문 출력하는 함수 import
import Greeting from './components/Greetings';
// 인라인 조건부 렌더링으로 버튼 변경 함수 import
import LoginControl from './components/InlineGreetings';
// 인라인 조건부 렌더링 + 엘리먼트 요소 사용 버튼 변경 함수 import
import LoginControl2 from './components/InlineGreetings2';

// Library에서 사용될 books 배열
const books = [
    // 보통 아래와 같이 json 형태로 전달되지만 공공데이터는 xml로 전달되는 경우도 있다
    {title: "모던 리액트 완벽 입문", author: "야마다 요시히로"},
    {title: "처음 배우는 애저", author: "김도균"},
    {title: "Node.js 교과서", author: "조현영"}
]

function App() {
  return (
    <div className="App">
      {/* 컨텐츠가 없을 때는 <태그명 /> 혹은 <태그></태그> 형태로 막아서 사용 */}
      {/* 만들어둔 태그는 여러번 사용 가능 */}
      {/* props.속성명에 값을 전달할 때는 html 태그의 속성처럼 사용 */}
      {/* 아래에 적은 모든 속성들이 자바스크립트 객체로 생성되어 Book.jsx의 props 매개변수로 넘어감 */}
      {/* 배열을 사용해 books의 데이터를 받는 Library와 함께 사용 시 에러 발생 */}
      <Book title="모던 리액트 완벽입문" author="야마다 요시히로"/>
      
      {/* 계층 구조로 여러 개의 Book을 모아놓은 라이브러리 사용 */}
      <Library books={books}/>
      
      {/* 현재 시간과 날짜를 타입에 따라 표시하는 이벤트 사용 */}
      <EventBasic />
      <EventBasic type="date" />
      <EventBasic type="time" />
      
      {/* 버튼을 누를때마다 1씩 증가하는 이벤트 사용 */}
      {/* 숫자를 속성으로 넣을 때는 {} 표현식 사용 */}
      <Counter init={0}/>
      {/* 버튼을 누를때마다 1씩 증가하는 이벤트 사용 : useState 사용 */}
      <Counter1 init={0} />
      {/* 버튼 클릭 시 1씩 증가 이벤트 사용 : class component에서 useState 사용 */}
      <ClassCounter init={0} />
      {/* input에 입력한 값을 아래에 출력하는 이벤트 함수 : useState 사용 */}
      {/* init은 생략해도 동작되지만 공백을 부여 */}
      <LiveInput init=''/>

      {/* 조건부 렌더링으로 상황에 맞는 안내문 출력 함수 사용 */}
      <Greeting isJoined={true} />
      <Greeting isJoined={false} />

      {/* 로그인/로그아웃 버튼 클릭 시 상태 변환 함수 */}
      <LoginControl/>
      {/* 로그인/로그아웃 버튼 변환 함수 : 엘리먼트 요소 사용 */}
      <LoginControl2/>
    </div>
  );
}

export default App;
