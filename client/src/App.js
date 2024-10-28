import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Register from './components/Register';
import Login from './components/Login';
//import Dashboard from './components/dashboard/Dashboard';



function App() {
  const user = localStorage.getItem('token');
  useNavigate();

  return (
    <div className="App">
     {/* <Dashboard />*/}
      <Routes>
       {user && <Route path='/' element={<Main />} />}
        <Route path='/register' element={<Register />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>
    </div>
  );
}

export default App;
