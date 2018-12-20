import React, { Component } from 'react';
import {Route, Switch,  BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact'
import Errors from './components/Errors'
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
            <Route component={Errors}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
