import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RecipeCards from './RecipeCards';
import RecipeList from './RecipeList';
import SearchIcon from '@material-ui/icons/Search';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tab: {
        backgroundColor: 'red',
    },
    list: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
}));

export default function RecipeTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs className={classes.tab} value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="丼" {...a11yProps(0)} />
                    <Tab label="パスタ" {...a11yProps(1)} />
                    <Tab label="麺" {...a11yProps(2)} />
                    <a href="" onClick={(e) => { e.preventDefault(); props.searchState(props) }}><SearchIcon fontSize="large" /></a>
                </Tabs>

            </AppBar>
            <TabPanel className={classes.list} value={value} index={0}>
                <RecipeList type={1} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <RecipeList type={2} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <RecipeList type={3} />
            </TabPanel>
        </div>
    );
}