import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
//screens
import Home from '../home/Home';
import Comic from '../comic/Comic';
import Todo from '../todos/Todo';
import Cook from '../cook/Cook';
import './Navbar.css';
class Navbar extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <header ><Header /></header>
                <main>
                    <Switch>
                        <Route exact path="/homes/home" component={Home} />
                        <Route path="/Comic" component={Comic} />
                        <Route path="/todos/Todo" component={Todo} />
                        <Route path="/cook/Cook" component={Cook} />
                        <Route render={() => <p>not found!.</p>} />
                    </Switch>
                </main>
                <footer><Footer /></footer>
            </div>
        );
    }
}

export default Navbar; 

