import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main';
import About from './About';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
