import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from '../src/pages/Home'
import Menu from '../src/pages/Menu'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
