import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main.js';
import NY from './components/pages/NY.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/ny' element={<NY/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
