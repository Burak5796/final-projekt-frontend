import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main.js';
import Weather from './components/pages/Weather.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/test' element={<Weather/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
