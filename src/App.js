import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' component={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
