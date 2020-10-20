import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
//screens
import Home from './Home';
import About from './About';
import Todo from './Todo';
import './Navbar.css';
class Navbar extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <header ><Header /></header>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/Todo" component={Todo} />
                        <Route render={() => <p>not found!.</p>} />
                    </Switch>
                </main>
                <footer><Footer /></footer>
            </div>
        );
    }
}

export default Navbar; 

