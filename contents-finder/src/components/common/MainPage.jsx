import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import { Outlet } from 'react-router-dom';

export default function MainPage() {
  // useState로 관리되던 selected는 detail에 객체로 넘어가는 존재였으니
  // detail 태그가 필요 없어지면 같이 필요가 없어지므로 삭제
  return (
    <div className="App">
      <Header></Header>
      <div className="main-content">
        {/* MainContent 안에 book/blog 변환과 검색이 모두 들어있으므로
          book/blogdetail, searcharea 태그 필요없음 */}
        {/* <MainContent type="blog"></MainContent> */}

        {/* router를 사용해 book/blog 출력 */}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

  // const [selected, setSelected] = useState(null);
  // return (
  //   <BookContext.Provider value={{ setSelected }}>//
  //     <div className="App">
  //       <Header></Header>
  //       <div className="main-content">
  //         {/* 상황에 따라 book과 blog가 값으로 들어갈 수 있도록 해야한다 */}
  //         <SearchArea type="blog"></SearchArea>
  //         {/* <BookDetail book={selected}></BookDetail> */}
  //         <BlogDetail blog={selected}/>
  //       </div>
  //       <Footer></Footer>
  //     </div>
  //   </BookContext.Provider>//
  // );