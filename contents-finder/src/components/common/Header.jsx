import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Book Finder</h1>
      {/* router를 사용해 book/blog 변환할 버튼 생성 */}
      <nav>
        <ul>
          <li><Link to='/book'>책 검색</Link></li>
          <li><Link to='/blog'>블로그 검색</Link></li>
        </ul>
      </nav>
    </header>
  );
}
