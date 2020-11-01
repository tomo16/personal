import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuBookIcon from '@material-ui/icons/MenuBook';
//import Link from '@material-ui/core/Link'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { white } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        flexGrow: 1,
        color: "white",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "white",
    },
    title: {
        flexGrow: 1,
        fontStyle: "italic",
        fontWeight: "fontWeightBold",

    },
    bar: {
        //color: "white",
        backgroundColor: "red",
    }
}));

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const sideList = (
        <div className={classes.list}>
            <List>
                <Link to="/homes/Home">
                    <ListItem button>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link to="/comic/Comic">
                    <ListItem button>
                        <ListItemIcon><MenuBookIcon /></ListItemIcon>
                        <ListItemText primary="Comic" />
                    </ListItem>
                </Link>
                <Link to="/cook/Cook">
                    <ListItem button>
                        <ListItemIcon><FreeBreakfastIcon /></ListItemIcon>
                        <ListItemText primary="Cook" />
                    </ListItem>
                </Link>
                <Link to="/todos/Todo">
                    <ListItem button>
                        <ListItemIcon><ListIcon /></ListItemIcon>
                        <ListItemText primary="TodoList" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
        </div>
    );
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';


    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={state['left']} onClose={toggleDrawer('left', false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={toggleDrawer('left', false)}
                            onKeyDown={toggleDrawer('left', false)}
                        >
                            {sideList}
                        </div>
                    </Drawer>
                    <Typography variant="h4" className={classes.title}>
                        Personal File
                    </Typography>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div >
    );
}
/*<Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                    */