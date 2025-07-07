// import './App.css';
import books from './books';
import ForItem from './components/ForItem';
import ForNest from './components/ForNest';
import ForFilter from './components/ForFilter';

function App() {
  return (
    <div className="App">
      <ForNest src={books}/>
      <ForFilter src={books}/>
    </div>
  );
}

export default App;
