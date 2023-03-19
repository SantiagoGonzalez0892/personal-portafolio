import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/NavBar';
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <header>
            <Navbar />
          </header>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
