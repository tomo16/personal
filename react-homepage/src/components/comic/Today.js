import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));

export default function Today(props) {
    const classes = useStyles();
    const day = props.day;
    let today =(day.getMonth()+1) + "月" + day.getDate() + "日";
    return (
        <div className={classes.root}>
            {today}
        </div>
    );
}