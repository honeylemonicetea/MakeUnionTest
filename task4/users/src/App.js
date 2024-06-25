import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserDetail from './components/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="api">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user/:id' element={<UserDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
