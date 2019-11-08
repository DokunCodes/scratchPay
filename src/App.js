import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/pages/Login';
import Users from './containers/pages/Users';
import './App.css';
/**
 * App Entry
 */
class App extends Component {


  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/users" component={Users} />
      <Route path="/" component={Login} />
     </Switch>
     </BrowserRouter>
      </div>
    )
  }
}

export default App;
