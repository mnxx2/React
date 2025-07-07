import { createContext } from "react";

// 책 정보를 가지는 context 생성
const BookContext = createContext();
BookContext.displayName = 'BookContext';
export default BookContext;