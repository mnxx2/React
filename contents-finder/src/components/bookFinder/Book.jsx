import './Book.css';
import SelectedContext from '../common/SelectedContext';
import { useContext } from 'react';

export default function Book({ book }) {
  const { thumbnail, title, authors } = book;
  const { setSelected } = useContext(SelectedContext);
  const handleClick = () => setSelected(book);

  return (
    <div className="book-item" onClick={handleClick}>
      <img src={thumbnail} alt={`${title} 표지`} />
      <div className="book-info">
        <h3>{title}</h3>
        {/* <p>{authors.join(', ')}</p> */}
      </div>
    </div>
  );
}
