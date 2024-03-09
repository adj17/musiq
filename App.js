
import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

import PlaylistPage from './components/PlaylistPage';
import Profile from './components/Profile';
import User from './components/User';
import Admin from './components/Admin';
function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     {/* <Register/> */}
     <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/User" element={<User/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/Profile" element={<Profile/>} />
      
        <Route path="/Playlistpage/:videoId" element={<PlaylistPage />} />
</Routes>
</Router>
    </div>
  );
}

export default App;
