import React,{PureComponent} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/Header';
import Body from './components/Body';
import Test from './components/Test';
import Learn from './components/Learn';
import Analyse from './components/Analyse';
import Home from './components/Home';
import reducers from './reducers';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const store = createStore(reducers);
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Learn" component={Learn} />
      <Route path="/Test" component={Test} />
      <Route path="/Analyse" component={Analyse} />
    </div>
  </Router>
) 
const App = () => (
  <div>
       <Provider store={store}>
       <Home />
       </Provider>
  </div>
);

render(<App />, document.getElementById('root'));
