import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main.js';
import Details from './components/pages/Details.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/info' element={<Details/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
