import './App.css';
import BookCard from './components/BookCard';
import books from './books';
import Header from './components/Header';
import Library from './components/Library';
import BookChange from './components/\bBookChange';


const bts = [
    {image: '/bts/bts1.png', nick:'RM'},
    {image: '/bts/bts2.png', nick:'진'},
    {image: '/bts/bts3.png', nick:'슈가'},
    {image: '/bts/bts4.png', nick:'제이홉'},
    {image: '/bts/bts5.png', nick:'지민'},
    {image: '/bts/bts6.png', nick:'뷔'},
    {image: '/bts/bts7.png', nick:'정국'},
  ]

function App() {
  return (
    <div className="App">
      <Header title='📚 도서목록' />
      <Library books={books}/>
      <BookChange books={books} />
    </div>
  );
}

export default App;
