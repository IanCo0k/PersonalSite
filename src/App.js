import './App.css';
import Homepage from './components/Homepage.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Articles from './components/Articles.js';
import Studies from './components/Studies.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/articles' component={Articles}/>
        <Route path='/faith' component={Studies}/>
      </Switch>
    </Router>
  );
}

export default App;
