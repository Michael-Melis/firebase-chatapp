import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/auth';

const App = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const redirect = ({ to }) => {
    return user === null ? navigate(to) : null;
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {user ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Login />} />}
        {user ? <Route path="/profile" element={<Profile />} /> : <Route path="/profile" element={<Login />} />}
      </Routes>
    </>
  );
};

export default App;
