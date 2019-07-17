import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import About from './components/About.js';
import Shop from './components/Shop.js';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h1> Home Page </h1>
  </div>
)

export default App;
