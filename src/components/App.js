
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Summoners from './components/Summoners';
import Home from './components/Home';
import Autorzy from './components/Autorzy';

function App() {
  return (
    <Router>
      <div className="app">
      <Navbar />
      <Routes>
      <Route path='/summoners' element={<Summoners/>} />
      <Route path='/summoner' element={<Summoners/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/Autorzy' element={<Autorzy/>} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
