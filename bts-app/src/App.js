import logo from './logo.svg';
import './App.css';
import BTS from './components/BTS';
import Header from './components/Header';
import ParentComponent from './components/Parent';
import Member from './components/Member';
import MemberChanger from './components/MemberChanger';

//Bts-app 생성
function App() {
  // bts 멤버 배열, 아이템으로는 이미지와 닉네임(Nick)
  const bts = [
    {image: '/bts/bts1.png', nick:'RM'},
    {image: '/bts/bts2.png', nick:'진'},
    {image: '/bts/bts3.png', nick:'슈가'},
    {image: '/bts/bts4.png', nick:'제이홉'},
    {image: '/bts/bts5.png', nick:'지민'},
    {image: '/bts/bts6.png', nick:'뷔'},
    {image: '/bts/bts7.png', nick:'정국'},
  ]

  return (
    <div className="App">
      <Header image='/bts/bts-launch.png' title="BTS"/>
      {/* array 순회하여 출력 */}
      <BTS members={bts}></BTS>
      <ParentComponent/>
      <MemberChanger members={bts}/>
    </div>
  );
}

export default App;
