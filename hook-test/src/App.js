import logo from './logo.svg';
import './App.css';
import CCounter from './components/CCounter';
import ExampleUseEffect from './components/ExampleUseEffect';
import ExampleUseMemo from './components/ExampleUseMemo';
import ExmplaeUseCallback from './components/ExampleUseCallback';
import ExampleUseRef from './components/ExampleUseRef';
import ExampleUseReducer from './components/ExampleUseReducer';
import DarkOrLight from './components/DarkOrLight';


function App() {
  return (
    <div className="App">
      <CCounter count={0}/>
      <ExampleUseEffect/>
      <ExampleUseMemo number={5}/>
      <ExmplaeUseCallback/>
      <ExampleUseRef/>
      <ExampleUseReducer/>

      {/* 5/23 context */}
      <DarkOrLight/>
    </div>
  );
}

export default App;
