import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';


import About from './About';
import Home from './Home';
import Todo from './Todo';
import Menu from './menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (

            <div>

                <Menu />

            </div>
        )

    }
}

export default Header;
