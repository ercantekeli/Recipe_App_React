import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about/About';
import Home from './pages/home/Home';

import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* <Route element={<Github/>} /> */}
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
