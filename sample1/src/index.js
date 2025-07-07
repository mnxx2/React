import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// src/components 폴더에 있는 Hello.jsx 파일 import
// ./ > 현재 경로(위치)
import Hello from './components/Hello';
import SayHello from './components/SayHello';
import Library from './components/Library';

function Welcome(props) {
  return(
    <h1>환영합니다. {props.nation}에서 오신 {props.pName}님 환영합니다.</h1>
  )
}

const element1 = <h1 className='greeting'>
                'Hello World!1'
                </h1>

const element2 = React.createElement(
  'h1', {className:'greeting'},
  'Hello World!2'

);

const element3 = { // 1과 2는 모두 3의 형태를 띈다
  type:'h1',
  props:{
    className: 'greeting',
    Children: 'Hello World!3'
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const myName = '오이영';

// root.render(
//   // 속성을 지정하면 객체 형태로 전달됨
//   // -> {pName:'오이영', nation:'미국'}
//   <>
//   <Welcome pName='오이영' nation='미국'/> 
//   <Welcome pName='오이영' nation='미국'/>
//   </>
// );

root.render(
  // <SayHello myName="오이영" to="React"/>
  <Library/>

);

// root.render(
//   // <h1>Hello {myName}</h1>
//   // 만들었던 함수가 새로운 태그로써 작동
//   <Hello/>
// );

// root.render(
  // element1
  // element2
  // 단일 엘리먼트로 만들어줘야 함
  // <div>
  //   <p>Hello World!</p>
  //   <p>Hello World!</p>
  // </div>

  // <React.Fragment>
  //   <p>Hello World!!</p>
  //   <p>Hello World!!</p>
  // </React.Fragment>

  // 위의 fragment를 아래처럼 축약해서 사용 가능
//   <>
//     <p>Hello World!!!</p>
//     <p>Hello World!!!</p>
//   </>
// );

// root.render(
//   <div>
//   <h1>Hello React</h1>
//   {/* 리액트는 단일 엘리먼트를 생성하기 때문에 div로 감싸주지 않으면 에러 발생 */}
//   <h1>Hello React</h1>
//   </div>
// );

// root.render(
//   <React.StrictMode>
//     <App />
//     <h1>Hello React</h1>
//     element1
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
