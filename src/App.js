import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
