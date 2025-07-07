import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainPage from './components/common/MainPage';
import MainContent from './components/common/MainContent';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage/>,
      children: [
        {
          // 기본값을 book으로 설정
          index: true,
          element: <MainContent type='book'/>
        },
        {
          path: '/book',
          element: <MainContent type='book'/>
        },
        {
          path: '/blog',
          element: <MainContent type='blog'/>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
