import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main.js';
import Test from './components/pages/Test.js';
import Weather from './components/pages/Weather.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/test' element={<Test/>} />
      <Route path='/we' element={<Weather />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
