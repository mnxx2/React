import './App.css';
import MapTest from './components/MapTest';
import MapMarkerTest from './components/MapMarkerTest';
import CustomOverlayTest from './components/CustomOverlayTest';
import GeoLocation from './components/GeoLocation';

function App() {
  return (
    <div className="App">
      <MapTest/>
      <br/>
      {/* 한 페이지에 같이 출력하면 공간적 문제가 생길 수 있으니 되도록 하나만 출력, 나머지는 주석 혹은 삭제 권장 */}
      {/* <MapMarkerTest/> */}
      {/* <CustomOverlayTest/> */}
      {/* <GeoLocation/> */}
    </div>
  );
}

export default App;
