import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from '../src/pages/Home'
import Menu from '../src/pages/Menu'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
