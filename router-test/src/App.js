import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/BasicRouter';
import linkRouter from './routes/LinkRouter';

function App() {
  return (
    <RouterProvider router={linkRouter}></RouterProvider>
  );
}

export default App;
