import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main.js';
import NY from './components/pages/NY.js';
import LA from './components/pages/LA.js';
import Rom from './components/pages/Rom.js';
import London from './components/pages/London.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <h1 className='headline'>TWP Travel Weather App</h1>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/rom' element={<Rom/>} />
      <Route path='/new-york' element={<NY/>} />
      <Route path='/los-angeles' element={<LA/>} />
      <Route path='/london' element={<London/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
