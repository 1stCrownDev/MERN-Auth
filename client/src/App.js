import { Routes, Route, Navigate } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Main from './components/Main';




function App() {
  const user = localStorage.getItem('token');
  Navigate();

  return (
    <div className="App">
      <Routes>
        {use && <Route path='/' element={<Main />} />}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>
    </div>
  );
}

export default App;
