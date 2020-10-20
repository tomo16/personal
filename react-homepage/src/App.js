import React, { Component } from 'react';
import { BrowserRouter ,Switch, Route } from "react-router-dom";
import About from './components/About';
import './App.css';
import Home from "./components/Home";
import Navbar from './components/Navbar';
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/components/About" component={About} />
          <Route path="/" component={Navbar} /> //基本こっちのみ表示
        </Switch>
      </BrowserRouter>
    );
  }
}




export default App;
